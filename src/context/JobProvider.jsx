import { createContext, useContext, useEffect, useState } from "react";

const initialJobs = [
  { id: 1, name: "work hard", priority: "urgent" },
  { id: 2, name: "find a new job", priority: "urgent" },
  { id: 3, name: "read a book", priority: "regular" },
  { id: 4, name: "i have to dance", priority: "trivial" },
  { id: 5, name: "save humanity", priority: "trivial" },
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
  
  //! CRUD operations - Read
  useEffect(() => {
    const getLocalJobs = getLocalStorage();
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
