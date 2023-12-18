"use client"
import { Search } from "@/components/website/search"
import { UserNav } from "@/components/website/user-nav"
import { MainNav } from "@/components/website/main-nav"
import JobsTable from "./JobsTable/Jobs"

export default function Admin() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <JobsTable />
         </div>
    </>
  )
}