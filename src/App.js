import "./App.css";
import Card from "./Card";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      {data.map((name, index) => (
        <Card name={name} index={index + 1} key={index} />
      ))}
    </div>
  );
}

export default App;
