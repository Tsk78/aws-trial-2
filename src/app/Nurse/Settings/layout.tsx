import { Metadata } from "next"
import { MainNav } from "../components/MainNav"
import { UserNav } from "../components/UserNav"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/Nurse/Settings",
  },
  {
    title: "Account",
    href: "/Nurse/Settings/account",
  },
  {
    title: "Appearance",
    href: "/Nurse/Settings/appearance",
  },
  {
    title: "Notifications",
    href: "/Nurse/Settings/notifications",
  },
  {
    title: "Display",
    href: "/Nurse/Settings/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
          <div className="border-b-2 border-black bg-gray-100">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-5">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}