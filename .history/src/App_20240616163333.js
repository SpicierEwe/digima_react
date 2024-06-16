import { Router } from "react-router";
import "./App.css";
import LandingPage from "./Components/landingPage/landingPage";

function App() {
  return (
    <Router>
      <div className="App max-w-screen-2xl mx-auto">
        {/* <NavBar></NavBar> */}
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
