import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Used for the absolute Open Graph/Twitter image URLs below. Change it if
// the site moves to a custom domain.
const siteUrl = "https://dynamotech.vercel.app";

const title = "Emmanuel Adegbaju | n8n AI Automation, Odoo ERP & Invoice Processing";
const description =
  "Automation engineer and Odoo developer in Lagos. I build n8n workflows and AI agents that connect to Odoo, Dynamics 365, your CRM or Google Sheets and take manual work off your team, from invoice processing to lead qualification.";
const shortDescription =
  "n8n workflows, AI agents, invoice and document extraction, and Odoo customization that take manual work off your team.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description: shortDescription,
    url: siteUrl,
    siteName: "dynamotech",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shortDescription,
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
