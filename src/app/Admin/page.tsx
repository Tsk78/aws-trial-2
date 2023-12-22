import { Button } from "@/components/ui/button"
import { z } from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"
import Link from 'next/link'
import AddJob from "./components/AddJob"
import {JobSchema} from "./data/schema"
async function getJobs() {
  const response = await fetch('http://127.0.0.1:5000/jobs');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Jobs = await response.json();

  return z.array(JobSchema).parse(Jobs);
}
async function handleRemoveJob(index: number) {
  const response = await fetch('http://127.0.0.1:5000/jobs');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Jobs = await response.json();

  return z.array(JobSchema).parse(Jobs);
}
export default async function AdminPage() {



  // Load jobs from backend when component mounts
  const jobs = await getJobs()

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


      <div  className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <AddJob/>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-l font-medium">{job.title}</CardTitle> 
              </CardHeader>
              <CardContent>
                <CardDescription>{job.description}</CardDescription>
                {/* <div className="text-m ">Applicants: {job.applicants}</div> */}
                <Button asChild style={{ marginRight: '10px' }}>
                <Link href={`/Admin/${job.title}`}>View applicants</Link>
                </Button>
                {/* <Button onClick={() => handleRemoveJob(index)}>Remove job</Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

    </>
  );
}



