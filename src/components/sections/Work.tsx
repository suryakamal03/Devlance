import Image from "next/image"
import Link from "next/link"

import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { SectionHeading } from "@/components/sections/SectionHeading"

const projects = [
  {
    name: "Turf Rust",
    url: "https://turf-rust.vercel.app/",
    screenshot: "/Preview%20Turf.webp",
  },
]

export function Work() {
  return (
    <section id="work" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="OUR WORK"
          title="Projects we're proud of."
          description="A preview of the kind of sites we build for growing businesses. Each project is designed to load quickly, communicate clearly, and support real business goals."
        />

        <AnimatedSection className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group w-full bg-transparent p-0"
            >
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300 ease-out">
                <PreviewCard project={project} />
              </div>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}

function PreviewCard({ project }: { project: { name: string; url: string; screenshot?: string } }) {
  const slug = project.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")

  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden bg-transparent aspect-video rounded-md shadow-sm transition-all duration-300">
        {project.screenshot ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} in a new tab`}
            className="block w-full h-full relative group/image"
          >
            <Image
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover/image:opacity-90 transition-opacity duration-300"
              loading="lazy"
            />
          </a>
        ) : null}
      </div>

      <div className="mt-3 px-1 transition-all duration-300">
        <div className="mt-1 flex items-center justify-between gap-4">
          <a href={project.url} target="_blank" rel="noreferrer" className="inline-block transition-colors duration-300">
            <p className="font-heading text-sm font-semibold tracking-[-0.02em] text-[#0f0f0f]">
              {project.name}
            </p>
          </a>

          <div className="ml-auto">
            <Link href="/turf-rust/casestudy" className="inline-flex items-center rounded-full border border-[#e5e5e5] px-4 py-2 text-xs font-semibold text-[#0f0f0f] transition-colors hover:border-[#f97316] hover:text-[#f97316]">
              View Case Study →
            </Link>
          </div>
        </div>
        <p className="mt-2 text-sm leading-7 text-[#555555]">
          {slug === "turf-rust"
            ? "A demo sports-turf website designed to show how the Devlance stack handles service pages, enquiry flows, and polished visuals."
            : "A polished project preview that demonstrates the kind of fast, conversion-focused work we deliver for client sites."}
        </p>
      </div>
    </div>
  )
}
