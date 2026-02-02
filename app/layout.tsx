import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bodySans = DM_Sans({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

const displaySerif = Playfair_Display({
  variable: "--font-display-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mariana | Private Language Tutoring Online",
    template: "%s | Mariana",
  },
  description:
    "Private online language tutoring with personalized, culture-forward lessons in Japanese, Spanish, French, Italian, and English.",
  openGraph: {
    type: "website",
    title: "Mariana | Private Language Tutoring Online",
    description:
      "Personalized online language lessons with cultural immersion and flexible scheduling.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodySans.variable} ${displaySerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
