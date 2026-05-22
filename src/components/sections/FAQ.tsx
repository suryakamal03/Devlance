"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { SectionHeading } from "@/components/sections/SectionHeading"

const questions = [
  {
    question: "How long does it take to build a professional website?",
    answer:
      "The timeline depends on the scope of the project. A landing page or single-page website typically takes 3 to 5 business days. A multi-page business website built with Next.js usually takes 7 to 14 days. Larger projects with custom features like Stripe payments or booking integrations may take 2 to 3 weeks. We always agree on a clear deadline before starting so you know exactly when your site will be ready.",
  },
  {
    question: "Do you offer website support and maintenance after launch?",
    answer:
      "Yes, we provide ongoing website support and maintenance after every project. Our Pro plan includes dedicated post-launch support. We also offer monthly maintenance packages that cover speed optimization, security updates, content changes, and bug fixes. You will never be left on your own after your website goes live.",
  },
  {
    question: "Will I be able to update my website content myself?",
    answer:
      "Yes. All websites we build come with Sanity CMS integrated, giving you a clean and simple dashboard to edit text, images, blog posts, and pages without any coding knowledge. Whether your site is a landing page or a full multi-page website, Sanity makes content management straightforward and stress-free. We also provide a full walkthrough after launch so you feel confident managing your own site.",
  },
  {
    question: "What information do you need from me to start building my website?",
    answer:
      "To get started we need your business name, logo if you have one, brand colors, the text content for each page, and any reference websites you like the look of. If you do not have a logo or brand identity yet, we can help with that too. We will guide you through the entire process from start to finish.",
  },
  {
    question: "Do you build websites for businesses outside your local area?",
    answer:
      "Absolutely. Devlance works with small businesses, startups, and entrepreneurs across India and internationally. We operate fully remote and communicate via video calls, email, and chat. Location is never a barrier to working with us.",
  },
  {
    question: "How much does a professional website cost?",
    answer:
      "Our website packages start from ₹5,000 for a landing page and go up to ₹12,000 for a full multi-page website with Next.js and Sanity CMS. We offer transparent fixed pricing with no hidden fees.",
  },
  {
    question: "What technology do you use to build websites?",
    answer:
      "We build all websites using Next.js, a modern React framework that delivers exceptional speed, SEO performance, and scalability. For content management we integrate Sanity CMS, which gives you a powerful yet easy-to-use dashboard to manage your content. We also handle deployment on Vercel for fast, reliable global hosting. This stack ensures your website is fast, secure, and future-proof.",
  },
  {
    question: "How do payments work for website development projects?",
    answer:
      "We follow a simple two-part payment structure. You pay 50 percent upfront to confirm the project and 50 percent upon final delivery before the website goes live. Payments are accepted via Stripe, UPI, or bank transfer. We provide a proper invoice for every transaction.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a professional website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page takes 3 to 5 days. A multi-page business website built with Next.js takes 7 to 14 days. Larger projects with custom features may take 2 to 3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website support and maintenance after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing support and maintenance including speed optimization, security updates, content changes, and bug fixes after every project.",
      },
    },
    {
      "@type": "Question",
      name: "Will I be able to update my website content myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our websites come with Sanity CMS integrated. You get a clean dashboard to edit text, images, and pages without any coding knowledge. We provide a full walkthrough after launch.",
      },
    },
    {
      "@type": "Question",
      name: "What information do you need to start building my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We need your business name, logo, brand colors, page content, and reference websites you like. We guide you through the entire process from start to finish.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build websites for businesses outside your local area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Devlance works with businesses across India and internationally. We operate fully remote via video calls, email, and chat.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a professional website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packages start from ₹5,000 for a landing page up to ₹12,000 for a full website. Transparent fixed pricing with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "What technology do you use to build websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build all websites using Next.js for speed and SEO, Sanity CMS for easy content management, and deploy on Vercel for fast global hosting.",
      },
    },
    {
      "@type": "Question",
      name: "How do payments work for website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "50% upfront to confirm the project and 50% on final delivery. Payments via Stripe, UPI, or bank transfer with proper invoicing.",
      },
    },
  ],
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="bg-[#fafafa] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-16 md:grid-cols-[35%_65%]">
          <SectionHeading
            label="FAQ"
            title="Common questions."
            description="A few quick answers to the questions we get most often before projects begin."
            className="space-y-3 md:pt-2"
            titleClassName="max-w-xs"
            descriptionClassName="max-w-xs"
          />

          <div>
            {questions.map((question, index) => {
              const isOpen = openIndex === index

              return (
                <div key={question.question} className="border-b border-[#e5e5e5] py-5 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3 className="text-base font-medium text-[#0f0f0f]">{question.question}</h3>
                    <span className={`flex size-6 items-center justify-center text-[#0f0f0f] transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                      <Plus className="size-5" />
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="pt-2 pb-4 text-sm leading-relaxed text-[#555555]">
                      {question.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
