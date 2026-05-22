"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const Cal = dynamic(() => import("@calcom/embed-react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-white p-6 text-center text-sm text-[#555555]">
      Loading booking calendar...
    </div>
  ),
})

type CalBookingWidgetProps = {
  calLink: string
}

export function CalBookingWidget({ calLink }: CalBookingWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.1,
      }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="cal-widget-shell h-125 md:h-150">
      {shouldLoad ? (
        <Cal
          calLink={calLink}
          className="cal-widget-frame"
          config={{
            layout: "month_view",
            theme: "light",
          }}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-white p-6 text-center text-sm text-[#555555]">
          Booking calendar loads when you scroll here.
        </div>
      )}
    </div>
  )
}