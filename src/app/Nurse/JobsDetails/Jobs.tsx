'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';
import JobDetails from '../[Jobs]/page';
interface Job {
  id: string;
  title: string;
  description: string;
  roleDescription: string;
  keyResponsibilities: string;
  requirements: string;
  applicants: number;
}
export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);
  return (
    <Router>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-l font-medium">{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{job.description}</CardDescription>
              <div className="text-m ">Applicants: {job.applicants}</div>
              <Button asChild style={{ marginRight: '10px' }}>
                <Link to={`/Nurse/${job.title}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
        <Routes>
            {jobs.map((job, index) => (
              <Route key={index} path={`/Nurse/${job.title}`} element={<JobDetails job={job} />} />
            ))}
        </Routes>
      </div>
    </div>
  </Router>
  );
}


