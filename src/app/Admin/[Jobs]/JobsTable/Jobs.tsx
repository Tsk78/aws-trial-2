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
  const response = await fetch('http://127.0.0.1:5000/nurses');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Nurse = await response.json();

  return z.array(NurseSchema).parse(Nurse);
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