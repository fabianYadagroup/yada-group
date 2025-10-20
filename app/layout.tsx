import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "YADA GROUP — Smart Growth Through Acquisitions & Partnerships",
  description:
    "YADA GROUP helps entrepreneurs and businesses scale smarter through strategic acquisitions, partnerships, and operational growth — and we're scaling ourselves the same way.",
  metadataBase: new URL("https://yadagroup.com"),
  themeColor: "#0a0a0a",
  openGraph: {
    title: "YADA GROUP — Smart Growth Through Acquisitions & Partnerships",
    description:
      "We scale smarter through acquisitions, partnerships, and operations — and we're scaling ourselves the same way.",
    url: "https://yadagroup.com",
    siteName: "YADA GROUP",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YADA GROUP" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "YADA GROUP", description: "Smart Growth Through Acquisitions & Partnerships", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = "G-XXXXXXXXXX"; // <-- replace with my GA4 Measurement ID
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
    </html>
  );
}

