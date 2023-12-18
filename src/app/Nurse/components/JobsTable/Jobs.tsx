import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { NurseSchema } from "./data/schema"
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getNurses() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./src/app/Nurse/components/JobsTable/data/Nurses.json")
  )
  
  const Nurse = JSON.parse(data.toString())

  return z.array(NurseSchema).parse(Nurse)
}

export default async function JobsTable() {
  const tasks = await getNurses()

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