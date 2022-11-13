//import {  useState, useReducer } from "react";
//import { Context, initialJobs} from './context/'
import CreateJob from "./components/CreateJob";
import Header from "./components/Header";
import JobList from "./components/JobList";
//import JobList from "./components/JobList";
import JobProvider from "./context/JobProvider";

// function reducer (state, action) {
//   switch (action.type) {
//     case 'CREATE_JOB':
//       return [...state, action.payload]
//     case 'DELETE_JOB':
//       return state.filter(job => job.id !== action.payload)
//     default:
//       return state
//   }
// }

function App() {

  //const [jobs, setJobs] = useState(initialJobs);
  // const [state, dispatch] = useReducer(reducer, initialJobs);

  // const addJobs = ({ type, payload }) => {
  //   switch (type) {
  //     case "CREATE_JOB":
  //       setJobs([...jobs, payload]);
  //       break;
  //     case "DELETE_JOB":
  //       const newJobs = jobs.filter((job) => job.id !== payload);
  //       setJobs(newJobs);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <JobProvider>
      <div className="App">
        <Header />
        <CreateJob />
        <JobList />
      </div>
    </JobProvider>
  );
}

export default App;


