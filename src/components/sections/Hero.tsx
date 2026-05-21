import Link from "next/link"

import { AnimatedSection } from "@/components/sections/AnimatedSection"

export function Hero() {
  return (
    <section id="top" className="bg-white pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <AnimatedSection className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fed7aa] bg-[#fff7ed] px-4 py-1.5 text-sm font-medium text-[#f97316]">
            <span className="size-2 rounded-full bg-[#f97316]" aria-hidden="true" />
            Now accepting clients · June 2026
          </div>

          <div className="mt-8 space-y-4">
            <h1 className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.05em] text-[#0f0f0f] md:text-4xl lg:text-5xl lg:max-w-4xl">
              <span className="block">We Build Websites</span>
              <span className="block">That Work For</span>
              <span className="block">
                <span className="relative inline-block pb-4">
                  Your Business.
                  <span className="absolute left-0 bottom-2 h-1 w-full origin-left bg-[#f97316]" />
                </span>
              </span>
            </h1>

            <p className="max-w-[540px] text-sm leading-7 text-[#555555] md:text-base">
              Devlance is a Chennai-based web development team that builds fast, modern, and SEO-optimized websites using Next.js and Sanity CMS. Whether you need a landing page or a full business website, we deliver clean code, strong search visibility, and practical results that help your brand grow.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#book" className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f0f0f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#f97316]">
                Book a Call →
              </Link>
              <Link href="/#work" className="inline-flex h-11 items-center justify-center rounded-full border border-[#0f0f0f] bg-white px-6 py-2.5 text-sm font-semibold text-[#0f0f0f] transition-colors hover:bg-[#f5f5f5]">
                See Our Work
              </Link>
              <Link href="/#services" className="inline-flex h-11 items-center justify-center rounded-full border border-transparent px-0 py-2.5 text-sm font-semibold text-[#f97316] underline decoration-[#fed7aa] underline-offset-4 transition-colors hover:text-[#ea6c0a]">
                View our services
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="relative mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:52px_52px] opacity-80" />
            <div className="absolute inset-5 rounded-[1.5rem] border border-[#e5e5e5]" />
            <div className="absolute left-6 top-8 h-24 w-24 rounded-full border border-[#fed7aa] bg-[#fff7ed]" />
            <div className="absolute right-6 bottom-14 h-32 w-32 rounded-[1.75rem] border border-[#e5e5e5] bg-white" />
            <div className="absolute inset-x-8 top-1/2 h-px bg-[#ededed]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-[#bbbbbb]">
              <span>Editorial</span>
              <span>Precision</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
