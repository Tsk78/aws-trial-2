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
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"
import Link from 'next/link'
interface Job {
  title: string;
  description: string;
  applicants: number;
}
import { AddJob } from './components/AddJob';
export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDescription, setNewJobDescription] = useState('');
  const [showAddJob, setShowAddJob] = useState(false);
  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleAddJob = () => {
    const newJobs = [...jobs, { title: newJobTitle, description: newJobDescription ,applicants: 0 }];
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs)); // Save jobs to local storage
    setNewJobTitle('');
  };

  const handleRemoveJob = (index: number) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs)); // Save jobs to local storage
  };


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

      {showAddJob && (
          <div className="fixed bg-black opacity-50 inset-0 flex items-center justify-center" onClick={() => setShowAddJob(false)}>
            <div style={{ zIndex: 1, backgroundColor: 'green' }} onClick={(e) => e.stopPropagation()}>
              <AddJob />
            </div>
          </div>
        )}
      <div  className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            {/* <input
              type="text"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              placeholder="Job title"
            /> */}
            {/* <Button onClick={handleAddJob}>Add job</Button> */}
            <Button onClick={() => setShowAddJob(true)}>Add job</Button>      
          </div>
        </div>


        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-l font-medium">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Card Desc</CardDescription>
                <div className="text-m ">Applicants: {job.applicants}</div>
                <Button asChild style={{ marginRight: '10px' }}>
                <Link href={`/Admin/${job.title}`}>View applicants</Link>
                </Button>
                <Button onClick={() => handleRemoveJob(index)}>Remove job</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}



