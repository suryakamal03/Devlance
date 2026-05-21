import Link from "next/link"

import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { SectionHeading } from "@/components/sections/SectionHeading"

const plans = [
  {
    key: "starter",
    name: "Starter",
    tagline: "Your first professional website, done right",
    features: [
      "Landing page included",
      "Mobile responsive design",
      "SEO basics setup",
      "1 revision round",
      "Delivery in 3–5 days",
    ],
    featured: true,
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Full-scale website with everything included",
    features: [
      "Full website with Next.js + Sanity CMS",
      "Advanced SEO",
      "Stripe payment integration",
      "Ongoing support included",
      "Unlimited revisions",
      "Delivery in 14–21 days",
    ],
    featured: false,
  },
]

function CheckCircle({ active }: { active?: boolean }) {
  return (
    <span
      className={
        active
          ? "inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/25"
          : "inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#e6e6e6]"
      }
    >
      <svg width="8" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L4 7L11 1" stroke={active ? "white" : "#6b6b6b"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function Plans() {
  return (
    <section id="plans" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="PRICING"
          title="Simple, transparent pricing."
          description="No hidden fees. Pick what fits your budget."
          align="center"
        />

        <AnimatedSection className="mt-14 grid grid-cols-1 gap-5 items-stretch md:grid-cols-2">
          {plans.map((plan) => {
            const isActive = plan.featured
            const baseBg = isActive ? "bg-[#f97316] text-white" : "bg-[#f5f5f5] text-[#0f0f0f]"

            return (
              <article
                key={plan.key}
                className={`${baseBg} w-full rounded-3xl p-7 h-full flex flex-col`}
              >
                <div className="flex w-full flex-col md:flex-row md:items-stretch md:justify-between h-full">
                  <div className="md:w-3/4">
                    <div>
                      <div className="text-xl font-bold">{plan.name}</div>
                      <div className={`${isActive ? "text-white/90" : "text-[#0f0f0f]/90"} mt-1 text-xs`}>{plan.tagline}</div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <span className="w-4 h-4 flex-shrink-0">
                            <CheckCircle active={isActive} />
                          </span>
                          <div className={`${isActive ? "text-white" : "text-[#0f0f0f]"} text-sm font-medium`}>{f}</div>
                        </div>
                      ))}
                    </div>

                    {isActive ? (
                      <div className="mt-5 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white/70 line-through">₹10,000</span>
                          <span className="text-sm text-white/70 line-through">₹8,000</span>
                          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-[#f97316]">
                            Limited Offer
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-medium opacity-70">Starting at</span>
                        </div>
                        <div className="text-4xl font-bold text-white">₹5,000</div>
                      </div>
                    ) : (
                      <div className="mt-5 flex flex-col gap-1">
                        <span className="text-xs font-medium text-gray-500">Starting at</span>
                        <div className="text-4xl font-bold text-gray-900">₹12,000</div>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex md:mt-0 md:w-1/4 md:justify-end md:items-end">
                    <Link
                      href="/#book"
                      className={`${
                        isActive
                          ? "bg-white text-[#f97316]"
                          : "bg-[#0f0f0f] text-white"
                      } rounded-full px-5 py-2.5 font-semibold text-sm w-full md:w-auto text-center`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </AnimatedSection>
      </div>
    </section>
  )
}
