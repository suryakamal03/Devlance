"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react"

const BOOK_SECTION_ID = "book"
const BOOK_SCROLL_KEY = "devlance-scroll-target"

type BookCallLinkProps = Omit<ComponentPropsWithoutRef<"button">, "type"> & {
  className?: string
  children: ReactNode
}

export function BookCallLink({ children, className, onClick, ...props }: BookCallLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(BOOK_SCROLL_KEY, BOOK_SECTION_ID)
    }

    if (pathname === "/") {
      event.preventDefault()
      document.getElementById(BOOK_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    event.preventDefault()
    router.push("/")
  }

  return (
    <button {...props} type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}

export { BOOK_SCROLL_KEY, BOOK_SECTION_ID }