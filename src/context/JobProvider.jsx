import { createContext, useContext, useState } from "react";

const initialJobs = [
  { name: "Job 1", priority: "urgent" },
  { name: "Job 2", priority: "regular" },
  { name: "Job 3", priority: "trivial" },
  { name: "Job 4", priority: "regular" },
];

export const JobContext = createContext();

const JobProvider = ({ children }) => {

  const [jobs, setJobs] = useState(initialJobs);

  const values = { jobs, setJobs };
  return (
    <JobContext.Provider value={values}>{children}</JobContext.Provider>
  );
};

export const useJobContext = () => {
  return useContext(JobContext);
};

export default JobProvider;