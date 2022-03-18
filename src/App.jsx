import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import UserForm from "./components/UserForm";

function App() {
  const username = useSelector((state) => state.users[0]);
  console.log(username);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/user/:username"
          element={<PrivateRoute element={<User />} />}
        />
        <Route path="/login" element={<Welcome />} />
        <Route path="/register" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
