"use client"
import React, { useEffect, useState } from 'react';

interface Job {
  title: string;
  description: string;
  roleDescription: string;
  keyResponsibilities: string;
  requirements: string;
  applicants: number;
}

export default function JobDetails({ params }: { params: { title: string } }) {
  const [jobs, setJobs] = useState<Job[]>([]);

  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Find the job that matches the title parameter

  console.log(jobs);

  const job = jobs.find(job => job.title === decodeURIComponent(params.title));

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
    </div>
  );
}