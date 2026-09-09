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

// TODO(Emmanuel): swap in your real domain once you have one — this is
// used for the absolute Open Graph/Twitter image URLs below.
const siteUrl = "https://dynamotech.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emmanuel Adegbaju — Odoo ERP & Business Process Automation",
  description:
    "I build the ERP customizations, automation pipelines, and systems integrations that remove manual work from retail and SME operations — Odoo, AI agents, and Web3 development.",
  openGraph: {
    title: "Emmanuel Adegbaju — Odoo ERP & Business Process Automation",
    description:
      "Odoo ERP customization, business process automation, and systems integration for retail and SME operations.",
    url: siteUrl,
    siteName: "Emmanuel Adegbaju",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Adegbaju — Odoo ERP & Business Process Automation",
    description:
      "Odoo ERP customization, business process automation, and systems integration for retail and SME operations.",
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
