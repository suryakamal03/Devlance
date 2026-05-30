import { client } from "@/sanity/client"
import { Database, Globe, Search, Wrench, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/sections/AnimatedSection"
import { SectionHeading } from "@/components/sections/SectionHeading"

const query = `*[_type == "service"] | order(order asc) {
  _id, title, description, icon
}`

const iconMap = {
  Globe,
  Database,
  Search,
  Wrench,
  Zap,
} as const

type Service = {
  _id: string
  title: string
  description?: string | null
  icon?: string | null
}

const fallbackServices: Service[] = [
  {
    _id: "fallback-nextjs-websites",
    title: "Next.js websites",
    description: "Fast, modern websites built for performance, SEO, and conversion.",
    icon: "Globe",
  },
  {
    _id: "fallback-landing-pages",
    title: "Landing pages",
    description: "High-converting landing pages designed for campaigns and lead generation.",
    icon: "Globe",
  },
  {
    _id: "fallback-business-websites",
    title: "Business websites",
    description: "Complete business websites focused on performance, clarity, and SEO.",
    icon: "Globe",
  },
  {
    _id: "fallback-seo",
    title: "SEO optimization",
    description: "Technical and on-page SEO foundations that help your site get discovered.",
    icon: "Search",
  },
  {
    _id: "fallback-maintenance",
    title: "Website maintenance",
    description: "Ongoing support to keep your site secure, stable, and up to date.",
    icon: "Wrench",
  },
  {
    _id: "fallback-speed",
    title: "Performance tuning",
    description: "Speed-focused improvements that reduce load time and improve user experience.",
    icon: "Zap",
  },
]

export async function Services() {
  let services: Service[] = []

  if (client) {
    services = await client.fetch<Service[]>(query, {}, { next: { revalidate: 60 } }).catch(() => [])
  }

  if (!services || services.length === 0) {
    services = fallbackServices
  }

  return (
    <section id="services" className="bg-[#fafafa] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="SERVICES"
          title={["Everything you need", "to get online and grow."]}
          description="From custom Next.js websites to managed content and ongoing support, we offer everything a growing business needs to establish a strong online presence. Our team specializes in performance-first development that ranks on Google and converts visitors into customers."
          titleClassName="max-w-3xl"
        />

        <AnimatedSection className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe

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
                </div>
              </article>
            )
          })}
        </AnimatedSection>
      </div>
    </section>
  )
}
