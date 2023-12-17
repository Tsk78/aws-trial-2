import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs" 

import { Search } from "@/components/website/search"

import { UserNav } from "./components/UserNav"
import { OverviewContent } from "./components/OverviewContent"
import  JobsTable  from "./components/JobsTable/Jobs"
import { MainNav } from "./components/MainNav"

export const metadata: Metadata = {
  title: "Nurse Homepage",
  description: "Nurse Homepage",
}

export default function Nurse() {
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
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>New Jobs</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="Jobs" >
                Jobs
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <OverviewContent />
            </TabsContent>
            <TabsContent value="Jobs" className="space-y-4">
              <JobsTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}