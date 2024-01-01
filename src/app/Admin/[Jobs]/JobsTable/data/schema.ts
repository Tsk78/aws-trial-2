import { Ratings } from './data';
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const NurseSchema = z.object({
    NurseId: z.number(),
    Name: z.string(),
    Race: z.string(),
    Gender: z.string(),
    Vaccination_Status: z.string(),
    Experience: z.string(),
    Specialisation: z.string(),
    Postal_Code:z.string(),
    Available_Work_Timing: z.string(),
    Rating: z.string(),
})


export type Task = z.infer<typeof NurseSchema>