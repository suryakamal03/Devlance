"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  EyeOff,
  Image as ImageIcon,
  MessageCircle,
  Phone,
  Search,
  Smartphone,
  TrendingDown,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projectUrl = "https://turf-rust.vercel.app/"
const heroImage = "/Preview%20Turf.jpeg"

const overviewItems = [
  { label: "Client", value: "Turf Rust (Demo Project)" },
  { label: "Industry", value: "Sports & Recreation" },
  { label: "Location", value: "Chennai, Tamil Nadu" },
  { label: "Timeline", value: "2 Weeks" },
  { label: "Services", value: "Web Design, Development, SEO, Enquiry Flow" },
]

const problems = [
  {
    icon: Phone,
    title: "Only Phone Bookings",
    text:
      "Players had to call or WhatsApp to check availability and book slots. This meant missed bookings after hours and a lot of back and forth.",
  },
  {
    icon: EyeOff,
    title: "Zero Online Presence",
    text:
      "Most turfs only had an Instagram page. No website meant they were invisible on Google when players searched for turfs nearby.",
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    text:
      "Without online booking, prime evening slots often went unfilled because players couldn't check availability in real time.",
  },
]

const solutions = [
  {
    number: "01",
    title: "Mobile First Design",
    text:
      "Built for the players who browse on their phones. Every element is optimized for touch, speed, and easy enquiries on mobile.",
  },
  {
    number: "02",
    title: "WhatsApp Enquiry Flow",
    text:
      "Clear call-to-action buttons make it simple for visitors to call or open WhatsApp with one tap, reducing friction before a booking request.",
  },
  {
    number: "03",
    title: "Content Management Ready",
    text:
      "The layout is structured so the owner can easily swap images, update details, and keep the site fresh without redesigning the whole page.",
  },
  {
    number: "04",
    title: "Local SEO Optimized",
    text:
      "Built with structured data, proper heading hierarchy, and location-based keywords so the turf ranks on Google when players search nearby.",
  },
]

const techStack = ["Next.js 14", "Tailwind CSS", "Framer Motion", "Shadcn UI", "TypeScript", "Vercel"]

const features = [
  {
    icon: Search,
    title: "SEO Optimized",
    text: "Ranks for 'turf near me Chennai' and nearby area searches.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    text: "Fully optimized for mobile. Loads in under 2 seconds.",
  },
  {
    icon: ImageIcon,
    title: "Gallery Management",
    text: "A clean gallery layout highlights the turf from multiple angles and builds confidence.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    text: "Floating WhatsApp button for instant enquiries anytime.",
  },
]

const results = [
  { value: "100%", label: "Mobile Optimized" },
  { value: "< 2s", label: "Page Load Speed" },
  { value: "90+", label: "Google PageSpeed Score" },
  { value: "24/7", label: "Enquiry Access" },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function CaseStudyClient() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-0">
        <Link
          href="/#work"
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
              Turf Rust — Sports Turf
              <span className="block">Website</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#555555]">
              A modern sports turf website built for Chennai&apos;s growing sports culture. Designed to turn
              visitors into enquiries quickly and make the business look premium online.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatPill value="2 Weeks" label="Timeline" />
            <StatPill value="Next.js + Tailwind" label="Tech" />
            <StatPill value="Chennai, India" label="Location" />
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#fafafa] shadow-sm">
            <Image
              src={heroImage}
              alt="Turf Rust website preview"
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
              Turf Rust is a demo project built by Devlance to showcase what a modern sports turf business
              website can look like. The goal was to build a fast, mobile-first website that makes enquiries
              effortless for players and reduces manual follow-up for turf owners.
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
            Most turfs in Chennai lose leads every day.
          </h2>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <motion.div key={problem.title} variants={sectionVariants}>
                  <Card className="h-full border-[#e6e6e6] bg-white shadow-none">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff7ed] text-[#f97316]">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold tracking-[-0.03em]">{problem.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#555555]">{problem.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div>
          <SectionEyebrow>THE SOLUTION</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            A website that works as hard as the turf does.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#555555]">
            We designed and built a complete web presence for Turf Rust — from brand identity to contact
            flows, gallery content, and trust-building sections.
          </p>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 space-y-4"
          >
            {solutions.map((solution) => (
              <motion.div key={solution.number} variants={sectionVariants}>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <SectionEyebrow>TECH STACK</SectionEyebrow>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Built with modern tools.</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#0f0f0f]"
            >
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <section className="bg-[#0f0f0f] py-16 text-white">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
          <SectionEyebrow className="text-[#f97316]">FEATURES</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Everything a turf business needs.
          </h2>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div key={feature.title} variants={sectionVariants}>
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
                </motion.div>
              )
            })}
          </motion.div>
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
                src="/Full%20website.png"
                alt="Full Turf Rust website screenshot"
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
                  <p className="font-heading text-4xl font-bold tracking-tighter text-[#f97316]">
                    {result.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#555555]">{result.label}</p>
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
            We build fast, modern websites for local businesses in Chennai starting from ₹5,000.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#f97316] px-8 py-6 text-white hover:bg-[#ea6c0a]">
              <Link href="/#book">Book a Free Call →</Link>
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
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      className={className}
    >
      {children}
    </motion.section>
  )
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


