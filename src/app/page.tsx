"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Work } from "@/components/sections/Work"
import { Testimonials } from "@/components/sections/Testimonials"
import { Plans } from "@/components/sections/Plans"
import { FAQ } from "@/components/sections/FAQ"
import { BookACall } from "@/components/sections/BookACall"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Plans />
        <FAQ />
        <BookACall />
      </main>
      <Footer />
    </div>
  )
}
