import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Plans } from "@/components/sections/Plans"

export const metadata: Metadata = {
  title: "Plans | Devlance",
  description: "Compare Devlance website packages and transparent pricing options.",
}

export default function PlansPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Plans />
      </main>
      <Footer />
    </div>
  )
}