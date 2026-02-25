import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaaryahire.com"),
  title: {
    default: "KaaryaHire | Recruitment & Staffing Solutions in India",
    template: "%s | KaaryaHire",
  },
  description: "KaaryaHire provides professional recruitment and staffing services including permanent, contract, bulk and industry-specific hiring solutions across India.",
  keywords: ["recruitment", "staffing", "bulk hiring", "contract staffing"],
  openGraph: {
    title: "KaaryaHire | Recruitment & Staffing Solutions in India",
    description: "KaaryaHire provides professional recruitment and staffing services including permanent, contract, bulk and industry-specific hiring solutions across India.",
    url: "https://kaaryahire.com",
    siteName: "KaaryaHire",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KaaryaHire Recruitment & Staffing Solutions"
      }
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DKGBPDZQBV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DKGBPDZQBV');
        `}
      </Script>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KaaryaHire",
            url: "https://kaaryahire.com",
            logo: "https://kaaryahire.com/logo.png",
            sameAs: [
              "https://www.instagram.com/kaaryahire",
              "https://www.facebook.com/profile.php?id=61586833107162",
              "https://www.linkedin.com/company/kaaryahire/"
            ]
          })
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
