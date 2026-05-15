"use client"

import { motion } from "framer-motion"
import Cal from "@calcom/embed-react"

export function BookACall() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK?.trim() || "surya-093128/30min"
  const hasCalLink = Boolean(calLink)

  return (
    <section id="book" className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f97316]"
            >
              Let&apos;s talk
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-heading text-[clamp(3rem,6vw,4rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white"
            >
              Ready to build
              <br />
              something great?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-8 text-gray-300"
            >
              Book a free 30-minute discovery call.
              <br />
              No commitment. No pressure.
            </motion.p>
            <motion.a
              href="#top"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f97316] px-10 py-5 text-lg font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
            >
              Book a Free Call →
            </motion.a>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm text-gray-300"
            >
              We usually respond within 24 hours.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-[#333333] bg-white"
          >
            {hasCalLink ? (
              <div className="no-scrollbar h-[500px] md:h-[600px] overflow-auto" style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}>
                <Cal
                  calLink={calLink}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "16px",
                    overscrollBehavior: "contain",
                  }}
                  config={{
                    layout: "month_view",
                    theme: "light",
                  }}
                />
              </div>
            ) : (
              <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
                <div className="max-w-sm space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f97316]">
                    Let&apos;s talk
                  </p>
                  <p className="text-sm leading-7 text-gray-300">
                    Set NEXT_PUBLIC_CAL_LINK to your Cal username, like YOUR_NAME/30min, to show the booking widget here.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
