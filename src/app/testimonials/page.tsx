import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Testimonials } from "@/components/sections/Testimonials"

export const metadata: Metadata = {
  title: "Testimonials | Devlance",
  description: "Read client testimonials and project feedback from Devlance work.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}