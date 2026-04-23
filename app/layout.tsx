import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, IBM_Plex_Mono, Crimson_Pro } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

/* ── System / fallback fonts ── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── Editorial font stack ── */
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
});

const crimson = Crimson_Pro({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Vishal Cherupally — Technical Publication",
  description:
    "A learning-first technical publication covering computer science, cloud, data engineering, AI/ML, system design, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        geistSans.variable,
        geistMono.variable,
        bebas.variable,
        ibmMono.variable,
        crimson.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {/* Push content below fixed nav */}
        <div style={{ paddingTop: 56 }}>{children}</div>
      </body>
    </html>
  );
}
