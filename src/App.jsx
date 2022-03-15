import "./App.css";
import { createStore } from "redux";

let store = createStore();
store.subscribe(() => console.log(store.getState()));

function App() {
  return <div className="App"></div>;
}

export default App;
