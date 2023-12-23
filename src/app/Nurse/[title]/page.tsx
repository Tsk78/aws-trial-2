import { z } from 'zod';
import { JobSchema } from '../components/JobsList/data/schema';
import JobDetails from './JobDetails';
import { MainNav } from '@/app/Nurse/components/MainNav';
import { UserNav } from '@/app/Nurse/components/UserNav';
export async function getJobs() {
  const response = await fetch('http://127.0.0.1:5000/jobs', { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const Jobs = await response.json();

  return z.array(JobSchema).parse(Jobs);
}

export default async function page({ params }: { params: { title: string } }) {
  
  const jobs = await getJobs();
  const title = decodeURIComponent(params.title);
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b-2 border-black bg-gray-100">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-5">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <JobDetails jobs={jobs} title={title} /> 
      </div>  
    </>
  );
}