"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Docs" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">

        {/* Desktop Nav */}
        <div className="mr-4 hidden md:flex items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              AI Clone Target
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold inline-block">
              AI Clone
            </span>
          </Link>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted hover:text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-44 w-[80vw] left-0 translate-x-0 h-full max-h-screen rounded-none top-0 translate-y-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2">
              <DialogHeader>
                <DialogTitle className="text-left font-bold">Navigation</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
