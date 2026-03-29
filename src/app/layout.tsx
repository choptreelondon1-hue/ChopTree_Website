import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://choptreelondon.com"),
  icons: {
    icon: "/images/logo-brand-cutout.png",
    apple: "/images/logo-brand-cutout.png",
  },
  title: {
    default: "Chop Tree London | Professional Tree Surgery & Arborist Services",
    template: "%s | Chop Tree London",
  },
  description:
    "Professional tree surgery, tree removal, stump removal and crown lifting services across London since 2019. Fully insured arborists based in Ealing. Free quotations.",
  keywords: [
    "tree surgery London",
    "tree removal London",
    "arborist London",
    "stump removal London",
    "crown lifting London",
    "tree services Ealing",
    "tree cutting London",
    "professional tree surgeon",
  ],
  authors: [{ name: "Chop Tree London" }],
  creator: "Chop Tree London",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://choptreelondon.com",
    siteName: "Chop Tree London",
    title: "Chop Tree London | Professional Tree Surgery & Arborist Services",
    description:
      "Professional tree surgery, tree removal, stump removal and crown lifting services across London since 2019. Free quotations available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chop Tree London - Professional Tree Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chop Tree London | Professional Tree Surgery",
    description: "Professional tree surgery & arborist services across London. Free quotations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add Google Search Console verification token here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
