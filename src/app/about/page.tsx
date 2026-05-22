import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { About } from "@/components/sections/About"

export const metadata: Metadata = {
  title: "About | Devlance",
  description: "Learn how Devlance builds fast, search-friendly websites for founders and small businesses.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  )
}