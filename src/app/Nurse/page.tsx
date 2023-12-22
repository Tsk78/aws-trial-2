import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserNav } from "./components/UserNav";
import { OverviewContent } from "./components/OverviewContent";
// import  JobsTable  from "./components/JobsTable/Jobs"
import Jobs from "./components/JobsList/JobList.";
import { MainNav } from "./components/MainNav";
import JobList from "./components/JobsList/JobList.";

export const metadata: Metadata = {
  title: "Nurse Homepage",
  description: "Nurse Homepage",
};

export default function Nurse() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b-2 border-black bg-gray-100">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-5">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="Jobs">Jobs</TabsTrigger>
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
              <JobList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
