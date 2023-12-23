"use client"
import { JobSchema } from '@/app/Admin/data/schema';
import { z } from 'zod';
import { Card, CardContent, CardTitle, CardHeader, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function JobDetails({ jobs, title }: { jobs: z.infer<typeof JobSchema>[]; title: string }) {
    const job = jobs.find(job => job.title === title);
    const [loading, setLoading] = useState(false);

    const handleApply = async () => {
      setLoading(true);
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);

    };
      // If no job matches the title parameter, return null
  if (!job) {
    return <h1 className='self-center'>Job not found</h1>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-[-50px]">
      <Card className="w-3/4 mx-auto overflow-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">{job.title}</CardTitle>
          <CardDescription className="mb-4">{job.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-semibold mb-1">Role Description</h3>
          <CardDescription className="mb-4">
            {job.roleDescription}
          </CardDescription>
          <h3 className="text-2xl font-semibold mb-1">Key Responsibilities</h3>
          <CardDescription className="mb-4">
            {job.keyResponsibilities}
          </CardDescription>
          <h3 className="text-2xl font-semibold mb-1">Requirements</h3>
          <CardDescription className="mb-4">{job.requirements}</CardDescription>
          <h3 className="text-2xl font-semibold mb-1">Pay</h3>
          <CardDescription className="mb-4">{job.pay}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex justify-center items-center w-full">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="py-2 px-4 text-xl" onClick={handleApply}>
                  {loading ? "Loading..." : "Apply for Job"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Job Application</AlertDialogTitle>
                  <AlertDialogDescription>
                    Applied for job successfully!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Link href="/Nurse">
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}