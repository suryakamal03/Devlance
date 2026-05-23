import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devlance1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Devlance |  Web Development Agency ",
  description:
    "Devlance is a Chennai-based Next.js web development agency building fast, SEO-optimized websites for startups and small businesses .",
  applicationName: "Devlance",
  creator: "Devlance",
  publisher: "Devlance",
  authors: [
    {
      name: "Devlance",
      url: "https://devlance1.vercel.app",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        url: "/Logo.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Devlance | Next.js Web Development Agency India",
    description:
      "Devlance builds fast, SEO-optimized websites for startups and small businesses in India.",
    url: "https://devlance1.vercel.app",
    siteName: "Devlance",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devlance Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlance | Next.js Web Development Agency India",
    description:
      "Fast, modern websites built with Next.js and Sanity CMS. Starting ₹5,000.",
    images: ["/og-image.png"],
    creator: "@devlance",
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
      <head>
        <meta
          name="google-site-verification"
          content="hzliCH-bp3WdgO-cwfz71YTo4PYXQOLnv5vZT7l_k7A"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0f0f0f]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Devlance",
              url: "https://devlance1.vercel.app",
              logo: {
                "@type": "ImageObject",
                url: "https://devlance1.vercel.app/Logo.png",
                width: 512,
                height: 512,
              },
              image: "https://devlance1.vercel.app/Logo.png",
              description:
                "Chennai-based Next.js web development agency building fast SEO-optimized websites for startups and small businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "devlance.agency@gmail.com",
                availableLanguage: ["English", "Tamil"],
              },
              sameAs: [],
            }),
          }}
        />
        {children}
        {GOOGLE_ANALYTICS_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}', {
  page_path: window.location.pathname,
});
`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
