import { z } from "zod"
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"
import AddJob from "./components/AddJob"
import {JobSchema} from "./data/schema"
import {JobCard} from "./components/JobCard" // Import the JobCard component

 export async function getJobs() {
  const response = await fetch('http://127.0.0.1:5000/jobs', { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Jobs = await response.json();

  return z.array(JobSchema).parse(Jobs);
}

export async function handleRemoveJob(Jobid: number) {
  const response = await fetch("http://127.0.0.1:5000/delete_jobs", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ JobId: Jobid }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  // Reload the page
  window.location.reload();
  return result;
}
export async function handleAddJob (job: any) {
  const response = await fetch("http://127.0.0.1:5000/add_jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: job.title,
      description: job.description,
      roleDescription: job.roleDescription,
      keyResponsibilities: job.keyResponsibilities,
      requirements: job.requirements,
      applicants: job.applicants,
      pay: job.pay,
      date: job.date,
      time: job.time
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  console.log(result);

  // Reload the page
  window.location.reload();
  return result;
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
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard </h2>
          <AddJob/>
        </div>
        <JobCard jobs={jobs} /> 
      </div>
    </>
  );
}



