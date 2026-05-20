"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { SectionHeading } from "@/components/sections/SectionHeading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    name: "Turf Rust",
    url: "https://turf-rust.vercel.app/",
    screenshot: "/Preview%20Turf.jpeg",
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group w-full bg-transparent p-0"
            >
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300 ease-out">
                <PreviewCard project={project} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PreviewCard({ project }: { project: { name: string; url: string; screenshot?: string } }) {
  const [useIframe, setUseIframe] = useState(false)

  return (
    <>
      <div className="relative w-full overflow-hidden bg-transparent aspect-video rounded-md shadow-sm transition-all duration-300">
        {!useIframe && project.screenshot ? (
          <a href={project.url} target="_blank" rel="noreferrer" className="block w-full h-full relative group/image">
            <Image
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover/image:opacity-90 transition-opacity duration-300"
              onError={() => setUseIframe(true)}
            />
          </a>
        ) : (
          <iframe
            src={project.url}
            title={`${project.name} preview`}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            scrolling="no"
          />
        )}
      </div>

      <div className="mt-3 px-1 transition-all duration-300">
        {(() => {
          const slug = project.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "")
          return (
            <div className="mt-1 flex items-center justify-between gap-4">
              <a href={project.url} target="_blank" rel="noreferrer" className="inline-block transition-colors duration-300">
                <p className="font-heading text-sm font-semibold tracking-[-0.02em] text-[#0f0f0f]">
                  {project.name}
                </p>
              </a>

              <div className="ml-auto transition-all duration-300">
                <Button asChild size="sm" variant="ghost">
                  <Link href={`/${slug}/casestudy`}>Case Study</Link>
                </Button>
              </div>
            </div>
          )
        })()}
      </div>
    </>
  )
}
