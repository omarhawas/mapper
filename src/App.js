import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Sidebar /> */}
      <Map />;
    </div>
  );
}

export default App;
