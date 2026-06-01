import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "NEXUS CAFE — Case Study",
  description: "A premium case study for NEXUS CAFE, a cinematic gaming cafe landing page built for bookings and menu discovery.",
}

export default function CaseStudyPage() {
  redirect("/work/nexus-cafe/casestudy")
}
