"use server";

import { Resend } from "resend";
import { SERVICE_OPTIONS, CONTACT_EMAIL } from "@/lib/services";

const SERVICE_LABELS = Object.fromEntries(
  SERVICE_OPTIONS.map((option) => [option.id, option.label])
);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Resend's shared sender. It needs no domain setup, but Resend will ONLY
// deliver mail from it to the email address that owns your Resend account.
// Anything else is rejected with a 403. To send to any address, verify a
// domain in Resend and set CONTACT_FROM_EMAIL to an address on it.
const DEFAULT_FROM = "Portfolio site <onboarding@resend.dev>";

const FALLBACK_MESSAGE = `Something went wrong sending this. Please email me directly at ${CONTACT_EMAIL}.`;

// Resend's reply when onboarding@resend.dev is used to send to anyone other
// than the Resend account owner: a 403 validation_error whose message says
// you can only send testing emails to your own address.
function isTestingSenderRestriction(error, from) {
  return (
    from.includes("resend.dev") &&
    error.statusCode === 403 &&
    (error.name === "validation_error" ||
      /own email|testing emails|verify a domain/i.test(error.message || ""))
  );
}

function clean(value, maxLength) {
  return (value || "").toString().trim().slice(0, maxLength);
}

export async function submitProjectInquiry(prevState, formData) {
  // Honeypot: real visitors never see or fill this field. If it's filled,
  // pretend success so bots don't learn to adapt.
  if (formData.get("company_website")) {
    return { status: "success", message: "Sent. I'll get back to you soon." };
  }

  const name = clean(formData.get("name"), 120).replace(/[\r\n]+/g, " ");
  const email = clean(formData.get("email"), 200);
  const company = clean(formData.get("company"), 200);
  const message = clean(formData.get("message"), 5000);
  const services = formData.getAll("services").map(String);

  if (!name || !email || !message || services.length === 0) {
    return {
      status: "error",
      message:
        "Please fill in your name, email, at least one service, and a short project description.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  if (!apiKey) {
    console.error(
      "[contact form] RESEND_API_KEY is not set. Add it to .env.local (local) or to Vercel → Settings → Environment Variables, then redeploy."
    );
    return { status: "error", message: FALLBACK_MESSAGE };
  }

  const serviceList = services
    .map((key) => SERVICE_LABELS[key] || key)
    .join(", ");

  try {
    const resend = new Resend(apiKey);

    // The Resend SDK does not throw when the API rejects an email. It
    // returns { data, error }, so the error has to be checked here.
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Services needed: ${serviceList}`,
        "",
        "Project details:",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("[contact form] Resend rejected the email:", {
        to,
        from,
        statusCode: error.statusCode,
        name: error.name,
        message: error.message,
      });

      if (isTestingSenderRestriction(error, from)) {
        console.error(
          `[contact form] With the onboarding@resend.dev sender, Resend only delivers to the email that owns your Resend account. Either set CONTACT_TO_EMAIL to that address, or verify a domain in Resend and set CONTACT_FROM_EMAIL to an address on it.`
        );
      }

      return { status: "error", message: FALLBACK_MESSAGE };
    }

    console.info("[contact form] Email sent, Resend id:", data?.id);
    return { status: "success", message: "Sent. I'll get back to you soon." };
  } catch (error) {
    console.error("[contact form] Unexpected error sending email:", error);
    return { status: "error", message: FALLBACK_MESSAGE };
  }
}
