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

interface Job {
  title: string;
  description: string;
  applicants: number;
}

interface AddJobProps {
  jobTitle: string;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  jobDescription: string;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddJob(){
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
  return (
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
  )
}
