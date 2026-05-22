"use client"

import { useEffect } from "react"

import { BOOK_SCROLL_KEY, BOOK_SECTION_ID } from "@/components/ui/BookCallLink"

export function ScrollToBookOnMount() {
  useEffect(() => {
    if (window.sessionStorage.getItem(BOOK_SCROLL_KEY) !== BOOK_SECTION_ID) {
      return
    }

    window.sessionStorage.removeItem(BOOK_SCROLL_KEY)

    const target = document.getElementById(BOOK_SECTION_ID)

    if (!target) {
      return
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [])

  return null
}