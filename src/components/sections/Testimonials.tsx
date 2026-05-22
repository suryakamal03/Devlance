import { AnimatedSection } from "@/components/sections/AnimatedSection"

const testimonials = [
  {
    quote:
      "Working with Devlance was smooth from start to finish. They delivered exactly what we needed.",
    initials: "AM",
    name: "Alex M.",
    role: "Founder at LocalBiz",
  },
  {
    quote:
      "Fast turnaround, clean code, and they actually listened to what we wanted. Highly recommend.",
    initials: "SK",
    name: "Sarah K.",
    role: "Owner at Bloom Studio",
  },
  {
    quote:
      "Our new website brought in 3 new clients already. Best investment we made this year.",
    initials: "JT",
    name: "James T.",
    role: "CEO at TechStart",
  },
]

const marqueeTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fafafa] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">
            TESTIMONIALS
          </div>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f0f0f] whitespace-nowrap">
            What clients say.
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="marquee mt-6">
            <div className="marquee__inner animate-marquee">
              {marqueeTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}`} className="marquee__item shrink-0">
                  <div className="flex items-start gap-3">
                    <div className="font-heading text-2xl leading-none text-[#f97316]">&quot;</div>
                    <p className="text-sm text-[#0f0f0f]">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] text-xs font-semibold text-[#f97316]">{testimonial.initials}</div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f0f0f]">{testimonial.name}</p>
                        <p className="text-xs text-[#555555]">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-[#f97316]">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
