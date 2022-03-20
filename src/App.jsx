import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import PrivateRoute from "./components/PrivateRoute";
import UserForm from "./components/UserForm";
import "./components/LogoutPopover.css";
import { useSelector } from "react-redux";

function App() {
  const loggedUser = useSelector((state) => state.users[0]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/users/:username"
          element={<PrivateRoute element={<User />} />}
        />
        {loggedUser ? (
          <Route path="/login" element={<Home />} />
        ) : (
          <Route path="/login" element={<Welcome />} />
        )}
        <Route path="/register" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
