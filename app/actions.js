"use server";

import { Resend } from "resend";

const SERVICE_LABELS = {
  odoo: "Odoo ERP customization & integration",
  automation: "Business process automation",
  integration: "Systems integration & custom builds",
  web3: "Web3 / blockchain development",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Where submissions land. Change this if the address ever changes.
const RECIPIENT = "dynamohtech24@gmail.com";

export async function submitProjectInquiry(prevState, formData) {
  // Honeypot — real visitors never see or fill this field. If it's
  // filled, silently pretend success so bots don't learn to adapt.
  if (formData.get("company_website")) {
    return { status: "success", message: "Sent — I'll get back to you soon." };
  }

  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const company = (formData.get("company") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();
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

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "submitProjectInquiry: RESEND_API_KEY is not set — see README for setup."
    );
    return {
      status: "error",
      message:
        "This form isn't fully wired up yet — email me directly instead.",
    };
  }

  const serviceList = services
    .map((key) => SERVICE_LABELS[key] || key)
    .join(", ");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // Resend's shared test domain — works without verifying a custom
      // domain, since every submission is sent to your own inbox anyway.
      // Swap to a verified "you@yourdomain.com" address later if you want.
      from: "Portfolio site <onboarding@resend.dev>",
      to: RECIPIENT,
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
        .filter(Boolean)
        .join("\n"),
    });

    return { status: "success", message: "Sent — I'll get back to you soon." };
  } catch (error) {
    console.error("submitProjectInquiry: Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong sending this — email me directly instead.",
    };
  }
}
