import Link from "next/link"

export const metadata = {
  title: "Turf Rust — Case Study",
}

export default function CaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-3xl font-bold">Turf Rust — Case Study</h1>
      <p className="mt-4 text-muted-foreground">A detailed case study for the Turf Rust project.</p>

      <section className="mt-8 prose">
        <p>Placeholder content — replace with the full case study details.</p>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary underline">Back home</Link>
      </div>
    </main>
  )
}
