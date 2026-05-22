import type { Metadata } from "next"

import { CaseStudyClient } from "@/app/turf-rust/casestudy/case-study-client"

export const metadata: Metadata = {
  title: "Turf Rust — Case Study | Devlance",
  description:
    "A modern case study for Turf Rust, a sports turf website built for Chennai's football community.",
}

export default function CaseStudyPage() {
  return <CaseStudyClient />
}