"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddJob() {
  return (
    <Card className="w-1/2 h-1/2 mx-auto ">
      <CardHeader className="space-y-1 items-center">
        <CardTitle className="text-6xl pt-5">Create a New Job</CardTitle>
        <CardDescription>
          Add the job name and description below
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-8">
  <div className="grid gap-2 w-full ">
    <Label htmlFor="JobName">Job Name</Label>
    <Input id="JobName" type="JobName" placeholder="Title of the Job" />
  </div>
  <div className="grid gap-2 w-full">
    <Label htmlFor="JobDescription">Job Description</Label>
    <Input id="JobDescription" type="JobDescription" placeholder="Description of the Job" />
  </div>
</CardContent>
<CardFooter>
        <Button className="w-full">Create Job</Button>
      </CardFooter>
    </Card>
  )
}