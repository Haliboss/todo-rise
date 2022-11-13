import { useState } from "react";
import { Context, initialJobs} from './context/'
import CreateJob from "./components/CreateJob";
import Header from "./components/Header";
import JobList from "./components/JobList";


function App() {

  const [jobs, setJobs] = useState(initialJobs);

  const addJob = ({ type, payload }) => {
    switch (type) {
      case "CREATE_JOB":
        setJobs([...jobs, payload]);
        break;
      case "DELETE_JOB":
        const newJobs = jobs.filter((job) => job.id !== payload);
        setJobs(newJobs);
        break;
      default:
        break;
    }
  };

  return (
    <Context.Provider value={{ jobs, addJob }}>
      <div className="App">
        <Header />
        <CreateJob />
        <JobList />
      </div>
    </Context.Provider>
  );
}

export default App;
