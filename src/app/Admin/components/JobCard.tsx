"use client"
import { z } from "zod";
import { JobSchema } from "../data/schema";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
import { handleRemoveJob } from "../page";

export function JobCard({ jobs }: { jobs: z.infer<typeof JobSchema>[] }) {
  return ( // Add this opening curly brace
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {jobs.map((job, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-l font-medium">{job.title}</CardTitle> 
          </CardHeader>
          <CardContent>
            <CardDescription>{job.description}</CardDescription>
            <CardDescription>{index}</CardDescription>
            <div className="text-m ">Applicants: {job.applicants}</div>
            <Button asChild style={{ marginRight: '10px' }}>
              <Link href={`/Admin/${job.title}`}>View applicants</Link>
            </Button>
            <Button onClick={() => handleRemoveJob(index)}>Remove job</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  ); 
}

