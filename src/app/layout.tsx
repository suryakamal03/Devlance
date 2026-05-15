import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/Loader";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlance — Web Development Agency",
  description:
    "Devlance helps small businesses and startups get online with fast, modern websites built with Next.js and Sanity CMS.",
  keywords: [
    "web development agency India",
    "hire web developer",
    "Next.js website development",
    "Next.js web development agency",
    "Next.js website India",
    "Sanity CMS website",
    "Sanity CMS integration",
    "headless CMS website",
    "Next.js Sanity CMS developer",
    "affordable website design",
    "small business website",
    "website development Chennai",
    "professional website builder",
    "Shopify store setup",
    "landing page design",
    "SEO optimized website",
    "website maintenance service",
  ],
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Devlance — Web Development Agency",
    description: "Fast, modern, affordable websites for small businesses.",
    url: "https://devlance.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0f0f0f]">
        <Loader />
        {children}
      </body>
    </html>
  );
}
