import { createContext, useContext, useEffect, useState } from "react";

const initialJobs = [
  { id: 7, name: "Osmn", priority: "trivial" },
  { id: 9, name: "Tal", priority: "trivial" },
  { id: 1, name: "Work Hard", priority: "urgent" },
  { id: 3, name: "Read a Book", priority: "urgent" },
  { id: 8, name: "Noah", priority: "trivial" },
  { id: 4, name: "Hasan Ali", priority: "regular" },
  { id: 2, name: "Study English", priority: "urgent" },
  { id: 5, name: "Ali", priority: "regular" },
  { id: 6, name: "Mustafa", priority: "regular" },
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
    //console.log(getLocalJobs?.length)
    getLocalJobs?.length || setLocalStorage(initialJobs);
    setJobs(getLocalStorage());
  }, []);
  //console.log(jobs);  
  
  const values = { jobs, setJobs, getLocalStorage, setLocalStorage };

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  return useContext(JobContext);
};

export default JobProvider;
