import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const JobSchema = z.object({
  JobId: z.number(),
  title: z.string(),
  description: z.string(),
  roleDescription: z.string(),
  keyResponsibilities : z.string(),
  requirements: z.string(),
  applicants: z.number().optional(),
  pay: z.string(),
})


export type Task = z.infer<typeof JobSchema>