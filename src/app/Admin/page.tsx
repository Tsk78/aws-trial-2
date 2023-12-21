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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Job {
  title: string;
  description: string;
  applicants: number;
}
export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleAddJob = () => {
    const newJobs = [...jobs, { title: jobTitle, description: jobDescription ,applicants: 0 }];
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs)); // Save jobs to local storage
    setJobTitle('');
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


      <div  className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
                <Dialog>
          <DialogTrigger asChild>
            <Button >Add Job</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a New Job</DialogTitle>
              <DialogDescription>
              Add the job name and description below
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="JobTitle" className="text-right">
                  Title
                </Label>
                <Input
                id="JobTitle"
                placeholder="Title of the Job"
                className="col-span-3"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="JobDescription" className="text-right">
                Description
                </Label>
                <Input
                id="JobDescription"
                placeholder="Description of the Job"
                className="col-span-3"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddJob} >Create Job</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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



