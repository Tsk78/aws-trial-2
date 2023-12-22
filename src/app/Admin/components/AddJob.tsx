"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from '@/components/ui/separator';

interface Job {
  title: string;
  description: string;
  roleDescription: string;
  keyResponsibilities: string;
  requirements: string;
  applicants: number;
}



export default function AddJob(){
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [keyResponsibilities, setKeyResponsibilities] = useState('');
  const [requirements, setRequirements] = useState('');

  // Load jobs from local storage when component mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleAddJob = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newJobs = [...jobs, { title: jobTitle, description: jobDescription, roleDescription: roleDescription, keyResponsibilities: keyResponsibilities, requirements: requirements, applicants: 0 }];
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs)); // Save jobs to local storage
    setJobTitle('');
    window.location.reload(); // Refresh page to show new job
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Add Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
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
            className="col-span-2"
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
            className="col-span-2"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)} />
            </div>
            <Separator className="my-6" />
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="RoleDescription" className="text-right">
            Role Description
            </Label>
            <Textarea
           id="RoleDescription"
           placeholder="A Description of what the role entails" className="col-span-4"
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
          />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="KeyResponsibilities" className="text-right">
              Key Responsibilities
            </Label>
            <Textarea
              id="KeyResponsibilities"
              placeholder="Responsibilities of the Nurse"
              className="col-span-4"
              value={keyResponsibilities}
              onChange={(e) => setKeyResponsibilities(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Requirements" className="text-right">
              Requirements
            </Label>
            <Textarea
              id="Requirements"
              placeholder="Requirements of the Nurse"
              className="col-span-4"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>
      </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddJob} >Create Job</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
