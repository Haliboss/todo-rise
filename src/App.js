import Header from "./components/Header";
import CreateJob from "./components/CreateJob";
import Footer from "./components/Footer";
import "./scss/App.scss";


function App() {
  return (
    <div className="App">
      <Header />
      <CreateJob />
      <Footer/>
    </div>
  );
}

export default App;
