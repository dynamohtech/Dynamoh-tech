// Sends one test email with the same settings as the contact form and
// prints exactly what Resend says. Run from the project folder:
//
//   npm run test:email
//
// (reads RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL from
// .env.local; needs Node 20.6 or newer)

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.CONTACT_TO_EMAIL || "dynamohtech24@gmail.com";
const from =
  process.env.CONTACT_FROM_EMAIL || "Portfolio site <onboarding@resend.dev>";

if (!apiKey) {
  console.error("RESEND_API_KEY is not set. Add it to .env.local first.");
  process.exit(1);
}

console.log(`Sending a test email\n  from: ${from}\n  to:   ${to}\n`);

const { data, error } = await new Resend(apiKey).emails.send({
  from,
  to,
  subject: "Portfolio contact form: test email",
  text: "If you can read this, the contact form's email settings work.",
});

if (error) {
  console.error("Resend rejected the email:");
  console.error(error);
  if (
    from.includes("resend.dev") &&
    error.statusCode === 403 &&
    (error.name === "validation_error" ||
      /own email|testing emails|verify a domain/i.test(error.message || ""))
  ) {
    console.error(
      "\nThe onboarding@resend.dev sender only delivers to the email that owns your Resend account.\n" +
        "Fix: set CONTACT_TO_EMAIL to that email, or verify a domain in Resend and set CONTACT_FROM_EMAIL."
    );
  }
  if (error.statusCode === 401 || /api key/i.test(error.message || "")) {
    console.error("\nThe API key looks invalid. Create a new one at https://resend.com/api-keys.");
  }
  process.exit(1);
}

console.log(`Sent. Resend email id: ${data.id}`);
console.log("Check the inbox (and the spam folder) of the 'to' address above.");
