"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Plans", href: "#plans", id: "plans" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault()
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleBookClick = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-[#e5e5e5] bg-white shadow-[0_8px_30px_rgba(15,15,15,0.04)]"
          : "border-transparent bg-white",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-heading text-[20px] font-bold tracking-[-0.04em] text-[#0f0f0f] dark:text-white"
        >
          <Image
            src="/Logo.jpg"
            alt="Devlance logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
            priority
            sizes="32px"
          />
          <span>Devlance</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative pb-0.5 text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "text-[#f97316]"
                  : "text-gray-700 hover:text-[#f97316]"
              }`}
            >
              {item.label}

              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#f97316]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleBookClick}
            className="hidden rounded-full bg-[#0f0f0f] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#f97316] md:inline-flex"
          >
            Book a Call
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0f0f0f] md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-white transition-all duration-200 ease-out ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 font-heading text-[20px] font-bold tracking-[-0.04em] text-[#0f0f0f] dark:text-white"
            >
              <Image
                src="/Logo.jpg"
                alt="Devlance logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
                priority
                sizes="32px"
              />
              <span>Devlance</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0f0f0f]"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className={`mobile-menu-nav flex flex-1 flex-col justify-center gap-6 ${isOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.id)
                  setIsOpen(false)
                }}
                className={`mobile-menu-item border-b border-[#e5e5e5] pb-4 text-3xl font-bold tracking-[-0.04em] transition-colors ${
                  activeSection === item.id ? "text-[#f97316]" : "text-[#0f0f0f] hover:text-[#f97316]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="mobile-menu-item mt-6 inline-flex w-fit rounded-full bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#f97316]"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
