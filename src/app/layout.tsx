import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Loader from "@/components/ui/Loader";

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
  title: "Devlance | Next.js Web Development Agency India",
  description:
    "Devlance is a Chennai-based Next.js web development agency building fast, SEO-optimized websites for startups and small businesses using Sanity CMS and Vercel. Starting ₹5,000.",
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
        url: "/Logo.jpg",
        type: "image/jpeg",
      },
    ],
  },
  openGraph: {
    title: "Devlance | Next.js Web Development Agency India",
    description: "Devlance builds fast, SEO-optimized websites for startups and small businesses in India.",
    url: "https://devlance1.vercel.app",
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
        <Script
          id="loader-control"
          strategy="afterInteractive"
        >
          {`
(function () {
  var loader = document.querySelector('[data-devlance-loader]');
  if (!loader) return;

  try {
    if (sessionStorage.getItem('devlance_loader_shown')) {
      loader.remove();
      return;
    }
  } catch (error) {}

  window.setTimeout(function () {
    try {
      sessionStorage.setItem('devlance_loader_shown', '1');
    } catch (error) {}

    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  }, 2500);
}());
`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Devlance",
              url: "https://devlance1.vercel.app",
              description: "Chennai-based Next.js web development agency building fast SEO-optimized websites for startups and small businesses.",
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
              sameAs: [
                "https://linkedin.com/company/devlance",
                "https://twitter.com/devlance",
                "https://github.com/devlance",
                "https://instagram.com/devlance",
              ],
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
