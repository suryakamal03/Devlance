"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  CalendarDays,
  Coffee,
  Gamepad2,
  MessageCircle,
  Monitor,
  ShoppingBag,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookCallLink } from "@/components/ui/BookCallLink"

const projectUrl = "https://game-center-eta-silk.vercel.app/"
const heroImage = "/Preview%20Gaming.webp"
const fullWebsiteImage = "/Full%20Website%20Gaming.png"

const overviewItems = [
  { label: "Client", value: "NEXUS CAFE (Concept Project)" },
  { label: "Industry", value: "Gaming Cafe / Hospitality" },
  { label: "Focus", value: "Bookings, Menu, Brand Experience" },
  { label: "Timeline", value: "2 Weeks" },
  { label: "Services", value: "Web Design, Development, SEO" },
]

const problems = [
  {
    icon: MessageCircle,
    title: "No Clear Booking Flow",
    text:
      "Visitors needed a simple way to reserve a slot without calling around or waiting for replies on social media.",
  },
  {
    icon: Coffee,
    title: "Menu Was Not Front and Center",
    text:
      "The cafe needed a stronger way to show drinks, snacks, and food photography so the offer felt premium and worth visiting for.",
  },
  {
    icon: Gamepad2,
    title: "The Brand Needed Atmosphere",
    text:
      "A gaming cafe should feel cinematic and social, not generic. The layout had to communicate energy, style, and comfort instantly.",
  },
]

const solutions = [
  {
    number: "01",
    title: "Hero Built for First Impressions",
    text:
      "A bold headline, clear subline, and two focused calls to action make the purpose of the site obvious within seconds.",
  },
  {
    number: "02",
    title: "Experience Sections",
    text:
      "Premium Lounge, Squad Booths, Stream Pods, and Coffee Bar sections help visitors picture the space before they arrive.",
  },
  {
    number: "03",
    title: "Booking-First Flow",
    text:
      "The slot picker is designed to feel immediate and practical, so users can choose a time and confirm quickly on mobile.",
  },
  {
    number: "04",
    title: "Menu and Brand Story Together",
    text:
      "The food and drinks section sits beside the booking experience so the page sells the atmosphere as well as the visit.",
  },
]

const features = [
  {
    icon: Smartphone,
    title: "Mobile First",
    text: "Designed to feel smooth and readable on phones where most booking decisions happen.",
  },
  {
    icon: CalendarDays,
    title: "Slot Booking Style",
    text: "A visual booking layout inspired by ticket selection makes the reservation process feel simple.",
  },
  {
    icon: ShoppingBag,
    title: "Menu Presentation",
    text: "Food and drink cards make it easy to showcase pricing, photography, and key items.",
  },
  {
    icon: Monitor,
    title: "Premium Visual Language",
    text: "Dark editorial styling, rounded cards, and generous spacing create a lounge-like feel.",
  },
]

const results = [
  { value: "Premium", label: "Brand Positioning" },
  { value: "Clear", label: "Booking Path" },
  { value: "Mobile", label: "Responsive Experience" },
  { value: "Menu", label: "Food Spotlight" },
]

export function CaseStudyClient() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-0">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:text-[#f97316]"
        >
          <ArrowLeft className="size-4" />
          Back to Work
        </Link>
      </div>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f97316]">Case Study</p>
            <h1 className="font-heading text-4xl font-bold tracking-tighter text-[#0f0f0f] sm:text-5xl lg:text-6xl">
              NEXUS CAFE —
              <span className="block text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                Premium
              </span>
              <span className="block">Gaming Cafe Website</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#555555]">
              A cinematic landing page for a gaming cafe concept built to sell the atmosphere, show the space,
              and make reservations feel effortless.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatPill value="2 Weeks" label="Timeline" />
            <StatPill value="Next.js + Tailwind" label="Tech" />
            <StatPill value="Concept Project" label="Status" />
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#fafafa] shadow-sm">
            <Image
              src={heroImage}
              alt="NEXUS CAFE website preview"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Project Overview
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#555555]">
              NEXUS CAFE was designed as a premium gaming cafe landing page with a dark editorial feel. The
              goal was to combine the energy of gaming with the comfort of a social hangout, while giving the
              business a clean way to promote bookings, menu items, and the overall cafe experience.
            </p>
          </div>

          <Card className="border-[#e5e5e5] shadow-sm">
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              {overviewItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-[#f0f0f0] bg-[#fafafa] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f97316]">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#0f0f0f]">{item.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="rounded-2xl bg-[#fafafa] p-6 sm:p-10">
          <SectionEyebrow>THE CHALLENGE</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            The cafe needed more than a basic brochure site.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <div key={problem.title}>
                  <Card className="h-full border-[#e6e6e6] bg-white shadow-none">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff7ed] text-[#f97316]">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold tracking-[-0.03em]">{problem.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#555555]">{problem.text}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div>
          <SectionEyebrow>THE SOLUTION</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Built to feel cinematic, practical, and easy to use.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#555555]">
            The page blends premium visuals with a booking-first structure. Visitors can see the vibe, skim
            the menu, understand the space, and move toward a reservation without friction.
          </p>

          <div className="mt-8 space-y-4">
            {solutions.map((solution) => (
              <div key={solution.number}>
                <Card className="border-[#e5e5e5] shadow-sm">
                  <CardContent className="flex gap-4 p-6 sm:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff7ed] font-heading text-sm font-bold text-[#f97316]">
                      {solution.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#0f0f0f]">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#555555]">{solution.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-[#0f0f0f] py-16 text-white">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
          <SectionEyebrow className="text-[#f97316]">FEATURES</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Everything a premium gaming cafe landing page needs.
          </h2>

          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title}>
                  <Card className="h-full border-[#222222] bg-[#161616] shadow-none">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1f1f] text-[#f97316]">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#b7b7b7]">{feature.text}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <SectionEyebrow>THE WEBSITE</SectionEyebrow>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">See it in action.</h2>

        <div className="mt-8">
          <div className="relative rounded-2xl bg-transparent p-1 shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-10 -bottom-4 h-8 rounded-full bg-black/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#fafafa] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <Image
                src={fullWebsiteImage}
                alt="NEXUS CAFE full website screenshot"
                width={1600}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild className="rounded-full bg-[#0f0f0f] px-6 py-6 text-white hover:bg-[#f97316]">
            <Link href={projectUrl} target="_blank" rel="noreferrer">
              View Live Site →
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="rounded-2xl bg-[#fafafa] p-6 sm:p-10">
          <SectionEyebrow>RESULTS</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            What this website delivers for the business.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {results.map((result) => (
              <Card key={result.label} className="border-[#e5e5e5] bg-white shadow-sm">
                <CardContent className="p-6 text-center">
                  <p className="font-heading text-2xl font-bold tracking-[-0.04em] text-[#f97316] sm:text-3xl lg:text-4xl leading-tight wrap-break-word">
                    {result.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#555555]">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-[#0f0f0f] py-24 text-center text-white">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
          <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
            Want a website like this
            <span className="block">for your business?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#888888]">
            We build fast, modern websites for local businesses and premium concept brands starting from ₹5,000.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#f97316] px-8 py-6 text-white hover:bg-[#ea6c0a]">
              <BookCallLink>Book a Free Call →</BookCallLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-[#0f0f0f]"
            >
              <Link href="/#work">View All Work</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={className}>{children}</section>
}

function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] text-[#f97316] ${className ?? ""}`.trim()}>
      {children}
    </p>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-full border border-[#e5e5e5] bg-white px-5 py-4 shadow-sm">
      <p className="text-base font-semibold text-[#0f0f0f]">{value}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-[#777777]">{label}</p>
    </div>
  )
}
