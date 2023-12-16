import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const taskSchema = z.object({
  Name: z.string(),
  Type_of_Registration: z.string(),
  NRIC: z.string(),
  Citizenship: z.string(),
  Vaccination_Status: z.string(),
  SPR_Year: z.string(),
  Race: z.string(),
  Gender: z.string(),
  Experience: z.string(),
  Specialisation: z.string(),
  Registration_Number: z.string(),
  Mobile_Number: z.string(),
  Residential_Address: z.string(),
  Postal_Code: z.string(),
  Email_Address: z.string(),
  Available_work_days: z.string(),
  Frequency_of_work: z.string(),
  IPS_or_ICU: z.string(),
  Available_work_timing: z.string(),
  label: z.string(),
  Locum_Experience_rating: z.string(),
})


export type Task = z.infer<typeof taskSchema>