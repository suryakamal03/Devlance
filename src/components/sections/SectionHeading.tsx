import { AnimatedSection } from "@/components/sections/AnimatedSection"
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
    <AnimatedSection
      className={cn("space-y-4", align === "center" && "mx-auto text-center", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316]">
        {label}
      </p>
      <h2
        className={cn(
          "font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0f0f0f]",
          titleClassName,
          align === "center" && "mx-auto max-w-4xl"
        )}
      >
        {lines.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="block">
            {line}
          </span>
        ))}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 text-[#555555]",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  )
}
