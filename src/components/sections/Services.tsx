import { Database, Globe, Search, Wrench, Zap } from "lucide-react"
import Link from "next/link"

import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { SectionHeading } from "@/components/sections/SectionHeading"

const services = [
  {
    title: "Custom Websites",
    description: "Built with Next.js for speed, SEO, and a clean user journey that turns interest into enquiries.",
    icon: Globe,
  },
  {
    title: "Sanity CMS Setup",
    description: "Manage your content easily with a clean, powerful CMS dashboard that keeps updates simple for your team.",
    icon: Database,
  },
  {
    title: "Landing Pages",
    description: "High-converting pages designed to capture attention quickly, explain the offer clearly, and drive action.",
    icon: Zap,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and get found on Google with on-page structure, semantic content, and technical best practices.",
    icon: Search,
  },
  {
    title: "Website Maintenance",
    description: "We keep your site fast, secure, and updated so it continues performing well after launch.",
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#fafafa] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="SERVICES"
          title={["Everything you need", "to get online and grow."]}
          description="From custom Next.js websites to Sanity CMS integration, we offer everything a growing business needs to establish a strong online presence. Our team specializes in performance-first development that ranks on Google and converts visitors into customers."
          titleClassName="max-w-3xl"
        />

        <AnimatedSection className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className="group rounded-2xl border border-[#e5e5e5] bg-white p-8">
                <div className="flex h-full flex-col gap-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff7ed] text-[#f97316]">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-[18px] font-bold tracking-[-0.03em] text-[#0f0f0f]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#555555]">{service.description}</p>
                  </div>
                  <Link href="/#book" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-transform hover:translate-x-1">
                    Get this service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            )
          })}
        </AnimatedSection>
      </div>
    </section>
  )
}
