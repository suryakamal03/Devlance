"use client"

import { motion } from "framer-motion"
import { Database, Globe, Search, Wrench, Zap } from "lucide-react"

import { SectionHeading } from "@/components/sections/SectionHeading"

const services = [
  {
    title: "Custom Websites",
    description: "Built with Next.js for speed and SEO.",
    icon: Globe,
  },
  {
    title: "Sanity CMS Setup",
    description: "Manage your content easily with a clean, powerful CMS dashboard.",
    icon: Database,
  },
  {
    title: "Landing Pages",
    description: "High converting pages that get results.",
    icon: Zap,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and get found on Google.",
    icon: Search,
  },
  {
    title: "Website Maintenance",
    description: "We keep your site fast and updated.",
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
          description="Five core services, one focused team."
          titleClassName="max-w-3xl"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group rounded-[1rem] border border-[#e5e5e5] bg-white p-8"
              >
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
                  <motion.a
                    href="#book"
                    whileHover={{ x: 4 }}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#f97316]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </motion.a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
