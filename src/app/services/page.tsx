import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Services } from "@/components/sections/Services"

export const metadata: Metadata = {
  title: "Services | Devlance",
  description: "Explore Devlance services for custom Next.js websites, Sanity CMS setup, landing pages, SEO, and maintenance.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </div>
  )
}