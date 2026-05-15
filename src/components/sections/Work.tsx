"use client"

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/sections/SectionHeading"

const projects = [
  {
    name: "Harbor Wellness",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    name: "Oak & Co. Studio",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    name: "Monarch Builders",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
]

export function Work() {
  return (
    <section id="work" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="OUR WORK"
          title="Projects we're proud of."
          description="A preview of the kind of sites we build for growing businesses."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-[1.25rem] border border-[#e5e5e5] bg-white p-5"
            >
              <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-[1rem] border border-[#e5e5e5] bg-[#f5f5f5]">
                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)]"
                />
                <div className="relative text-center">
                  <p className="font-heading text-3xl font-bold tracking-[-0.05em] text-[#999999]">
                    Coming Soon
                  </p>
                </div>
              </div>

              <div className="space-y-4 px-1 pt-5">
                <h3 className="font-heading text-[18px] font-bold tracking-[-0.03em] text-[#0f0f0f]">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-[#e5e5e5] bg-white px-3 py-1 text-[11px] font-medium text-[#555555]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <motion.a
                  href="#book"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f0f0f] transition-colors hover:text-[#f97316]"
                >
                  View Project <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
