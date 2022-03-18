import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.users[0]);
  console.log(username);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/login" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
