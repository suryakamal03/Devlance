import type { Metadata } from "next"

import { CaseStudyClient } from "@/app/nexus-cafe/casestudy/case-study-client"

export const metadata: Metadata = {
  title: "NEXUS CAFE — Case Study | Devlance",
  description: "A premium case study for NEXUS CAFE, a cinematic gaming cafe landing page built for bookings and menu discovery.",
}

export default function CaseStudyPage() {
  return <CaseStudyClient />
}
