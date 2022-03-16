import { Route, Routes } from "react-router";
import "./App.css";
import "./components/SideBarLeft.css";
import "./components/SideBarRight.css";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
