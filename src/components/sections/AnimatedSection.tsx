type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function AnimatedSection({ children, className, delay = 0, duration = 0.6, y = 40 }: AnimatedSectionProps) {
  const delayClass = delay === 0.12 ? "reveal-delay-120" : ""
  const durationClass = duration === 0.75 ? "reveal-duration-750" : ""
  const yClass = y === 56 ? "reveal-y-56" : ""

  return (
    <div className={["reveal-section", delayClass, durationClass, yClass, className].filter(Boolean).join(" ")}> 
      {children}
    </div>
  )
}