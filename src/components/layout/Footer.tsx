"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Plans", href: "#plans" },
  { label: "Book a Call", href: "#book" },
]

const socialLinks = [
  { label: "Twitter/X", href: "https://x.com", icon: X },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
]

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="font-heading text-[20px] font-bold tracking-[-0.04em] text-[#0f0f0f]">
              Devlance
            </div>
            <p className="text-sm leading-7 text-[#555555]">
              Building the web, one site at a time.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className="group relative text-sm font-medium text-[#0f0f0f] transition-colors hover:text-[#f97316]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#e5e5e5] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#555555]">© 2026 Devlance. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]"
                >
                  <Icon className="size-4" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
