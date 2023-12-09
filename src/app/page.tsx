
import { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
export const metadata: Metadata = {
  title: "Farrer Park Hospital",
  description: "Sign Up as a nurse today!",
}

export default function Home() {
  return (
    <>
    <div className="flex flex-col space-y-4 ">
    <Button> <Link href="/Auth/Login">Login</Link></Button>
    <Button><Link href="/Auth/SignUp">Sign Up</Link></Button>
    <Button><Link href="/Dashboard">Dashboard</Link></Button>
    <Button><Link href="/Cards">Cards</Link></Button>
    <Button><Link href="/Tasks">Tasks</Link></Button>
    <Button><Link href="/Forms">Forms</Link></Button>
    </div>
    </>
  )
}