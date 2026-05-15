"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label: string
  title: string | string[]
  description?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title]

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("space-y-4", align === "center" && "mx-auto text-center", className)}
    >
      <motion.p
        variants={wordVariant}
        className="text-xs font-semibold uppercase tracking-widest text-[#f97316]"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={titleContainer}
        className={cn(
          "font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f0f0f]",
          titleClassName,
          align === "center" && "mx-auto max-w-4xl"
        )}
      >
        {lines.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="block overflow-hidden">
            <span className="inline-flex flex-wrap gap-x-[0.22em]">
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={`${lineIndex}-${word}-${wordIndex}`}
                  variants={wordVariant}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </span>
        ))}
      </motion.h2>
      {description ? (
        <motion.p
          variants={wordVariant}
          className={cn(
            "max-w-2xl text-base leading-7 text-[#555555]",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
