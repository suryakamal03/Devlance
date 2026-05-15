"use client"

import { motion } from "framer-motion"

// trusted brands removed per design request

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Hero() {
  return (
    <section id="top" className="bg-white pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-full border border-[#fed7aa] bg-[#fff7ed] px-4 py-1.5 text-sm font-medium text-[#f97316]"
          >
            <motion.span
              className="size-2 rounded-full bg-[#f97316]"
              animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            Now accepting clients · June 2026
          </motion.div>

          <div className="mt-8 space-y-4">
            <motion.h1
              variants={heroContainer}
              className="font-heading text-3xl font-bold leading-[1.15] tracking-[-0.05em] text-[#0f0f0f] md:text-4xl lg:text-5xl lg:max-w-4xl"
            >
              <motion.span variants={heroItem} className="block">
                We Build Websites
              </motion.span>
              <motion.span variants={heroItem} className="block">
                That Work For
              </motion.span>
              <motion.span variants={heroItem} className="block">
                <span className="relative inline-block pb-4">
                  Your Business.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="absolute left-0 bottom-2 h-1 w-full origin-left bg-[#f97316]"
                  />
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="max-w-[480px] text-sm leading-7 text-[#555555] md:text-base"
            >
              Devlance is a web development agency helping small businesses and startups get online with fast, modern websites built with Next.js and Sanity CMS.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#book"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f0f0f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#f97316]"
              >
                Book a Call →
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#0f0f0f] bg-white px-6 py-2.5 text-sm font-semibold text-[#0f0f0f] transition-colors hover:bg-[#f5f5f5]"
              >
                See Our Work
              </motion.a>
            </motion.div>

            {/* Trusted-by section removed */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:52px_52px] opacity-80" />
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-5 rounded-[1.5rem] border border-[#e5e5e5]"
            />
            <motion.div
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-8 h-24 w-24 rounded-full border border-[#fed7aa] bg-[#fff7ed]"
            />
            <motion.div
              animate={{ rotate: [0, -3, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-6 bottom-14 h-32 w-32 rounded-[1.75rem] border border-[#e5e5e5] bg-white"
            />
            <div className="absolute inset-x-8 top-1/2 h-px bg-[#ededed]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-[#bbbbbb]">
              <span>Editorial</span>
              <span>Precision</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
