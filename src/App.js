import CreateJob from "./components/CreateJob";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobList from "./components/JobList";
import JobProvider from "./context/JobProvider";

function App() {

  return (
    <JobProvider>
      <div className="App">
        <Header />
        <CreateJob />
        <JobList />
        <Footer/>
      </div>
    </JobProvider>
  );
}

export default App;


