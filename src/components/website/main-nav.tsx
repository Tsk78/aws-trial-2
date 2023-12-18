import Link from "next/link"
import Image from "next/image"
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
        <Image  height={7} width={10} src="/FarrerParkLogo.png" alt="Logo" className="h-6 w-auto" />
      </Link>
      <Link
        href="/Cards"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Cards
      </Link>
      <Link
        href="/Tasks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Table
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