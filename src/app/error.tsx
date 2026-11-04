"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center px-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Something went wrong</h2>
        <p className="text-muted-foreground">
          An unexpected error occurred while rendering this page.
        </p>
      </div>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  )
}
