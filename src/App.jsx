import "./App.css";
import { createStore } from "redux";
import Home from "./pages/Home";

// let store = createStore();
// store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
