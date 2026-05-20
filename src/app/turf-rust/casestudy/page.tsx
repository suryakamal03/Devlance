import type { Metadata } from "next"

import { CaseStudyClient } from "./case-study-client"

export const metadata: Metadata = {
  title: "Turf Rust — Case Study",
  description:
    "A modern case study for Turf Rust, a sports turf website built for Chennai's football community.",
}

export default function CaseStudyPage() {
  return <CaseStudyClient />
}
