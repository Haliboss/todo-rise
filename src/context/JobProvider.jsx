import { createContext, useContext, useEffect, useState } from "react";

const initialJobs = [
  { id: 1, name: "Job 1", priority: "urgent" },
  { id: 2, name: "Job 2", priority: "regular" },
  { id: 3, name: "Job 3", priority: "trivial" },
  { id: 4, name: "Job 4", priority: "regular" },
];

export const JobContext = createContext();

const JobProvider = ({ children }) => {

  const [jobs, setJobs] = useState('');

  const setLocalStorage =(item)=> {
    localStorage.setItem("jobs", JSON.stringify(item));
  }
  
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("jobs"));
  };
  
  useEffect(() => {
    const getLocalJobs = getLocalStorage();
    console.log(getLocalJobs?.length)
    getLocalJobs?.length || setLocalStorage(initialJobs);
    setJobs(getLocalStorage());
  }, []);
  console.log(jobs);
  
  
  const values = { jobs, setJobs, getLocalStorage, setLocalStorage };

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  return useContext(JobContext);
};

export default JobProvider;
