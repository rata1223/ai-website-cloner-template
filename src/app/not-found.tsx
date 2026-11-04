import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center px-4">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tighter">404</h2>
        <p className="text-xl font-medium">Page not found</p>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
