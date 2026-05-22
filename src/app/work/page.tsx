import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Work } from "@/components/sections/Work"

export const metadata: Metadata = {
  title: "Work | Devlance",
  description: "See recent Devlance projects and case study previews built with a performance-first approach.",
}

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Work />
      </main>
      <Footer />
    </div>
  )
}