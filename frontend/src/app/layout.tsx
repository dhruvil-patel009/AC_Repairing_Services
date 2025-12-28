import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "ServiceHub - Professional Home Services at Your Doorstep | AC Repair, Plumbing, Electrician",
  description:
    "Get professional home services including AC repair, plumbing, electrician, home cleaning, car wash, and appliance repair. Book expert technicians instantly. Available 24/7.",
  keywords:
    "home services, AC repair, plumbing, electrician, home cleaning, car wash, appliance repair, professional technicians, on-demand services",
  authors: [{ name: "ServiceHub" }],
  creator: "ServiceHub",
  publisher: "ServiceHub",
  generator: "v0.app",
  metadataBase: new URL("https://servicehub.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://servicehub.com",
    title: "ServiceHub - Professional Home Services at Your Doorstep",
    description:
      "Get professional home services including AC repair, plumbing, electrician, home cleaning, car wash, and appliance repair. Book expert technicians instantly.",
    siteName: "ServiceHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceHub - Professional Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceHub - Professional Home Services at Your Doorstep",
    description:
      "Get professional home services including AC repair, plumbing, electrician, home cleaning, car wash, and appliance repair.",
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6C3FF5",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />

           {/* Bootstrap JS (REQUIRED) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />

      </body>
    </html>
  )
}
