"use client"
import React, { useState } from 'react';
import nurses from './Jobs/data/nurses.json'; // adjust the path to your nurses.json file
import { UserNav } from "./components/user-nav"
import { DataTable } from "./components/data-table"
import { MainNav } from '@/components/website/main-nav';

export default function NurseApplicantsPage() {
  const [jobs, setJobs] = useState([]);
  const [newJobTitle, setNewJobTitle] = useState('');

  const columns = React.useMemo(
    () => [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'Name',
      },
      {
        id: 'typeOfRegistration',
        Header: 'Type of Registration',
        accessor: 'Type_of_Registration',
      },
      {
        id: 'nric',
        Header: 'NRIC',
        accessor: 'NRIC',
      },
      // Add more columns as needed
      // ...
      {
        id: 'locumExperienceRating',
        Header: 'Locum Experience Rating',
        accessor: 'Locum_Experience_rating',
      },
    ],
    []
  );

  const handleRemoveJob = (index: number) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              placeholder="Job title"
            />
          </div>
        </div>
        <DataTable columns={columns} data={nurses} />
      </div>
    </>
  );
}