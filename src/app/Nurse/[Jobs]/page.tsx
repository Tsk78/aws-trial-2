"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
interface Job {
  id: string;
  title: string;
  description: string;
  roleDescription: string;
  keyResponsibilities: string;
  requirements: string;
  applicants: number;
}

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails(props: JobDetailsProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { id } = useParams<{ id: string }>();

  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Find the job that matches the id parameter


  const job = jobs.find(job => job.id === id);

  // If no job matches the id parameter, return null
  if (!job) {
    return null;
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