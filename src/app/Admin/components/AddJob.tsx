"use client";
import React, { useState } from 'react';
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
import { handleAddJob } from "../page";
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import  Link  from 'next/link';


export default function AddJob(){
  const [title, setTitle] = useState('');
  const [description, setJobDescription] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [keyResponsibilities, setKeyResponsibilities] = useState('');
  const [requirements, setRequirements] = useState('');
  const [pay, setPay] = useState('');
  const applicants = '0'

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const job = {
      title,
      description,
      roleDescription,
      keyResponsibilities,
      requirements,
      applicants,
      pay
    };

    await handleAddJob(job);
  };
  const handleApply = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setLoading(true);
    // Call your handleSubmit function here
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await handleSubmit(e);
    setLoading(false);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Job</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-96 overflow-auto">
          <DialogHeader>
            <DialogTitle>Create a New Job</DialogTitle>
            <DialogDescription>
              Add the job name and description below
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="JobTitle" className="text-right">
                  Title
                </Label>
                <Input
                  id="JobTitle"
                  name="JobTitle"
                  placeholder="Title of the Job"
                  className="col-span-2"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="JobDescription" className="text-right">
                  Description
                </Label>
                <Input
                  id="JobDescription"
                  name="JobDescription"
                  placeholder="Description of the Job"
                  className="col-span-2"
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Pay" className="text-right">
                  Pay
                </Label>
                <Input
                  id="Pay"
                  name="Pay"
                  placeholder="Pay rate per hour"
                  className="col-span-2"
                  onChange={(e) => setPay(e.target.value)}
                />
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="RoleDescription" className="text-right">
                  Role Description
                </Label>
                <Textarea
                  id="RoleDescription"
                  name="RoleDescription"
                  placeholder="A Description of what the role entails"
                  className="col-span-4"
                  onChange={(e) => setRoleDescription(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="KeyResponsibilities" className="text-right">
                  Key Responsibilities
                </Label>
                <Textarea
                  id="KeyResponsibilities"
                  name="KeyResponsibilities"
                  placeholder="Responsibilities of the Nurse"
                  className="col-span-4"
                  onChange={(e) => setKeyResponsibilities(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Requirements" className="text-right">
                  Requirements
                </Label>
                <Textarea
                  id="Requirements"
                  name="Requirements"
                  placeholder="Requirements of the Nurse"
                  className="col-span-4"
                  onChange={(e) => setRequirements(e.target.value)}
                />
              </div>
            </div>
          </form>
          <DialogFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="py-2 px-4 text-xl" onClick={handleApply}>
                  {loading ? "Loading..." : "Create Job"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Job Creation</AlertDialogTitle>
                  <AlertDialogDescription>
                    Job created successfully!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Link href="/Admin">
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
