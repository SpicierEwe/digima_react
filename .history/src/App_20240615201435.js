import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/homePage/homePage";
import NavBar from "./Components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage />
    </div>
  );
}

export default App;
