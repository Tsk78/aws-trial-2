
import { z } from "zod"
import {JobSchema} from "./data/schema"
import {JobCard} from "./JobCard" // Import the JobCard component

export async function getJobs() {
  const response = await fetch('http://127.0.0.1:5000/jobs', { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Jobs = await response.json();

  return z.array(JobSchema).parse(Jobs);
}

export default async function JobList() {
  const jobs = await getJobs();


  return (
      <>
      <div className="container mx-auto px-4">

        <JobCard jobs={jobs} /> 


      </div>
      </>
  );
}
