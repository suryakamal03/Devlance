import { AnimatedSection } from "@/components/sections/AnimatedSection"

export function About() {
  return (
    <section id="about" className="bg-[#fafafa] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="space-y-6 rounded-[2rem] border border-[#e5e5e5] bg-white p-8 lg:p-12">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316]">ABOUT</p>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f0f0f]">
              Why businesses choose Devlance
            </h2>
          </div>

          <div className="grid gap-6 text-base leading-8 text-[#555555] lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                We are a small but focused web development agency based in Chennai, Tamil Nadu. We work with local businesses, startups, and entrepreneurs who want a professional online presence without the agency price tag. Our goal is to make modern websites feel simple to launch, easy to manage, and strong enough to compete in search.
              </p>
              <p>
                Every project begins with a clear conversation about what the business actually needs. Some clients need a fast landing page that converts visitors into calls. Others need a larger website with services, case studies, enquiry forms, and CMS-controlled pages. We shape the build around those goals instead of forcing a template onto the brand.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                We handcraft each site with Next.js for speed, Sanity CMS for flexible editing, and Vercel for reliable global hosting. That stack gives clients a practical balance of performance, maintainability, and future growth. It also keeps the content editable so marketing updates do not require a developer every time a headline changes.
              </p>
              <p>
                Our process is straightforward. We start with a free discovery call to understand your audience, services, and goals. Then we design, build, test, and launch the site, usually within two weeks for a standard business website. After launch, we stay available for support, maintenance, and performance improvements so the site stays fast and current.
              </p>
            </div>
          </div>

          <div className="grid gap-4 border-t border-[#e5e5e5] pt-6 md:grid-cols-3">
            {[
              "Strategy-first planning that focuses on search visibility, clear messaging, and conversion paths.",
              "Custom design and development from scratch so every site matches the brand instead of a generic theme.",
              "Practical post-launch support for content changes, fixes, and ongoing improvements as the business grows.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#fafafa] p-4 text-sm leading-7 text-[#444444]">
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}