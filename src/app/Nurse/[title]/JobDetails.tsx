"use client"
import { JobSchema } from '@/app/Admin/data/schema';
import { z } from 'zod';

export default function JobDetails({ jobs, title }: { jobs: z.infer<typeof JobSchema>[]; title: string }) {
    const job = jobs.find(job => job.title === title);

      // If no job matches the title parameter, return null
  if (!job) {
    return <h1 className='self-center'>Job not found</h1>;
  }
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <h3>Role Description</h3>
      <p>{job.roleDescription}</p>
      <h3>Key Responsibilities</h3>
      <p>{job.keyResponsibilities}</p>
      <h3>Requirements</h3>
      <p>{job.requirements}</p>
      <h3>Number of Applicants</h3>
      <p>{job.applicants}</p>
      <h3>Pay</h3>
      <p>{job.pay}</p>
    </div>
  );
}