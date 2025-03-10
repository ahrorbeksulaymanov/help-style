import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSS Grid Layout Builder - Create Custom Grid Layouts",
  description: "An interactive tool built with Next.js to help developers easily create and customize CSS Grid layouts.",
  keywords: "CSS Grid, Layout Builder, Web Design, Responsive Design, Next.js",
  authors: [{ name: "Ahror", url: "https://help-style.vercel.app" }],
  robots: "index, follow",
  openGraph: {
    title: "CSS Grid Layout Builder",
    description: "An interactive tool to create custom CSS Grid layouts effortlessly.",
    url: "https://help-style.vercel.app",
    siteName: "CSS Grid Layout Builder",
    images: [
      {
        url: "https://help-style.vercel.app/file.svg",
        width: 1200,
        height: 630,
        alt: "CSS Grid Layout Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@help-style",
    title: "CSS Grid Layout Builder",
    description: "An interactive tool to create custom CSS Grid layouts effortlessly.",
    images: ["https://help-style.vercel.app/file.svg"],
  },
  other: {
    "google-site-verification": "IuWjOM1t-1_66e1VXGdiH1wI5BzW6Ebm4P33VBWTbB0",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
            {children}
        </Providers>
      </body>
    </html>
  );
}
