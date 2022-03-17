import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
