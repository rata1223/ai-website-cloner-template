"use client"

import { useEffect, useState, RefObject } from "react"

interface UseIntersectionObserverArgs {
  ref: RefObject<Element | null>
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  ref,
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = true,
}: UseIntersectionObserverArgs): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (isIntersecting && freezeOnceVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        if (isElementIntersecting) {
          setIntersecting(true)
          if (freezeOnceVisible) {
            observer.unobserve(element)
          }
        } else {
          if (!freezeOnceVisible) {
            setIntersecting(false)
          }
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, root, rootMargin, freezeOnceVisible, isIntersecting])

  return isIntersecting
}
