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
        href="/Admin"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Image  height={7} width={80} quality={100} src="/FarrerParkLogo.png" alt="Logo"  />
      </Link>
      <Link
        href="/Admin/AboutUs"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About Us
      </Link>
      <Link
        href="/Admin/ContactUs"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact Us
      </Link>
      <Link
        href="/Admin/Settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}