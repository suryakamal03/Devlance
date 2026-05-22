import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import dynamic from "next/dynamic"

const Services = dynamic(() => import("@/components/sections/Services").then((mod) => mod.Services), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const Work = dynamic(() => import("@/components/sections/Work").then((mod) => mod.Work), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const Plans = dynamic(() => import("@/components/sections/Plans").then((mod) => mod.Plans), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const BookACall = dynamic(() => import("@/components/sections/BookACall").then((mod) => mod.BookACall), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer), {
  loading: () => <div className="h-32 bg-white animate-pulse" />,
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f0f0f]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Plans />
        <FAQ />
        <BookACall />
      </main>
      <Footer />
    </div>
  )
}
