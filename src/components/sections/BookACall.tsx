import { CalBookingWidget } from "@/components/sections/CalBookingWidget"

export function BookACall() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK?.trim() || "devlance1"
  const hasCalLink = Boolean(calLink)

  return (
    <section id="book" className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f97316]"
            >
              Let&apos;s talk
            </p>
            <h2
              className="mt-6 font-heading text-[clamp(3rem,6vw,4rem)] font-bold leading-[0.95] tracking-tighter text-white"
            >
              Ready to build
              <br />
              something great?
            </h2>
            <p
              className="mt-6 max-w-xl text-lg leading-8 text-gray-300"
            >
              Book a free 30-minute discovery call.
              <br />
              No commitment. No pressure.
            </p>
            <a
              href="https://cal.com/devlance1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f97316] px-10 py-5 text-lg font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
            >
              Book a Free Call →
            </a>
            <p
              className="mt-4 text-sm text-gray-300"
            >
              We usually respond within 24 hours.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-[#333333] bg-white"
          >
            {hasCalLink ? (
              <CalBookingWidget calLink={calLink} />
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
          </div>
        </div>
      </div>
    </section>
  )
}
