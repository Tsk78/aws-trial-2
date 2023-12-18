import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./src/app/Tasks/data/tasks.json")
  )
  
  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function JobsTable() {
  const tasks = await getTasks()

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className=" px-4 py-4">
        <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </>
  )
}