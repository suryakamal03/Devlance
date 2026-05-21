import Link from "next/link"

import { AnimatedSection } from "@/components/sections/AnimatedSection"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Plans", href: "/#plans" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book a Call", href: "/#book" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white">
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <div className="font-heading text-[20px] font-bold tracking-[-0.04em] text-[#0f0f0f]">Devlance</div>
            <p className="text-sm leading-7 text-[#555555]">
              Building fast, search-friendly websites for founders who want a practical path from idea to launch.
            </p>
            <address className="not-italic space-y-2 text-sm leading-7 text-[#555555]">
              <p>Chennai, Tamil Nadu, India</p>
              <p>
                <a href="tel:+919XXXXXXXXX" className="font-medium text-[#0f0f0f] transition-colors hover:text-[#f97316]">
                  +91 9XXXXXXXXX
                </a>
              </p>
              <p>
                <a href="mailto:devlancestudio@gmail.com" className="font-medium text-[#0f0f0f] transition-colors hover:text-[#f97316]">
                  devlancestudio@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="group relative text-sm font-medium text-[#0f0f0f] transition-colors hover:text-[#f97316]">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="https://instagram.com/devlance" aria-label="Follow Devlance on Instagram" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]">Instagram</a>
              <a href="https://linkedin.com/company/devlance" aria-label="Devlance on LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]">LinkedIn</a>
              <a href="https://twitter.com/devlance" aria-label="Devlance on Twitter" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]">Twitter</a>
              <a href="https://github.com/devlance" aria-label="Devlance on GitHub" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e5e5e5] pt-6">
          <p className="text-sm text-[#555555]">© 2026 Devlance. All rights reserved.</p>
        </div>
      </AnimatedSection>
    </footer>
  )
}
