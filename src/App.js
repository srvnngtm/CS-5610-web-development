import logo from "./logo.svg";
import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hellow-world";
import Tuiter from "./tuiter";

function App() {
  return (
    <div id="container">
      <HelloWorld/>
      <Labs/>
      <Tuiter/>
    </div>
  );
}

export default App;
