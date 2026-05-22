"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { BookCallLink } from "@/components/ui/BookCallLink"

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Plans", href: "/plans" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
          className="flex items-center gap-3 font-heading text-[20px] font-bold tracking-[-0.04em] text-black"
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
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-0.5 text-sm font-medium transition-all duration-200 ${
                pathname === item.href
                    ? "text-[#f97316]"
                    : "text-black hover:text-[#f97316]"
              }`}
            >
              {item.label}

              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#f97316]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookCallLink
            className="hidden rounded-full bg-[#0f0f0f] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#f97316] md:inline-flex"
          >
            Book a Call
          </BookCallLink>
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
            <Link
              href="#top"
              className="flex items-center gap-3 font-heading text-[20px] font-bold tracking-[-0.04em] text-black"
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
            </Link>
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setIsOpen(false)
                }}
                className={`mobile-menu-item border-b border-[#e5e5e5] pb-4 text-3xl font-bold tracking-[-0.04em] transition-colors ${
                  pathname === item.href ? "text-[#f97316]" : "text-black hover:text-[#f97316]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <BookCallLink
              onClick={() => setIsOpen(false)}
              className="mobile-menu-item mt-6 inline-flex w-fit rounded-full bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#f97316]"
            >
              Book a Call
            </BookCallLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
