'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MainNav } from "@/components/website/main-nav"
import { UserNav } from "@/components/website/user-nav"

interface Job {
  title: string;
  applicants: number;
}

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJobTitle, setNewJobTitle] = useState('');

  const handleAddJob = () => {
    setJobs([...jobs, { title: newJobTitle, applicants: 0 }]);
    setNewJobTitle('');
  };

  const handleRemoveJob = (index: number) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              placeholder="Job title"
            />
            <Button onClick={handleAddJob}>Add job</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Applicants: {job.applicants}</div>
                <Button>View applicants</Button>
                <Button onClick={() => handleRemoveJob(index)}>Remove job</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}



