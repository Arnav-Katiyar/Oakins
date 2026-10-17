import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#2E1F1B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Oakins | Practical Digital Solutions for Small Businesses",
  description: SITE_CONFIG.shortDescription,
  applicationName: "Oakins",
  authors: [{ name: "Anadi Sharma", url: "https://oakins.com" }],
  keywords: [
    "Oakins",
    "small business website",
    "Indore web design",
    "business automation",
    "order management system",
    "digital partner",
    "appointment booking website",
    "workflow automation",
  ],
  openGraph: {
    title: "Oakins | Practical Digital Solutions for Small Businesses",
    description: SITE_CONFIG.shortDescription,
    url: "https://oakins.com",
    siteName: "Oakins",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakins | Practical Digital Solutions for Small Businesses",
    description: SITE_CONFIG.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F6EBDD] text-[#2E1F1B] antialiased min-h-screen flex flex-col selection:bg-[#E3A23C] selection:text-[#2E1F1B]">
        {children}
      </body>
    </html>
  );
}
