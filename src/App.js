import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import SideBar from "./components/Side/SideBar";
import Third from "./components/Third";

function App() {
  return (
    <div className="App">
      <SideBar />
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default App;
