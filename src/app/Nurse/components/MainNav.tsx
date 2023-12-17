import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/Dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <img src="/FarrerParkLogo.png" alt="Logo" className="h-7 w-auto" />
      </Link>
      <Link
        href="/About Us"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About Us
      </Link>
      <Link
        href="/Contact Us"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact Us
      </Link>
      <Link
        href="/Settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}