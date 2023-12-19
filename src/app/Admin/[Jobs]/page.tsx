import { Search } from "@/components/website/search"
import { MainNav } from "../components/main-nav"
import { UserNav } from "../components/user-nav"
import JobsTable from "./JobsTable/Jobs"

export default function Admin({ params }: { params: { Jobs: string } }) {
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
        <div  className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{decodeURIComponent(params.Jobs)}</h2>
          </div>
        </div>
        <JobsTable />
         </div>
    </>
  )
}