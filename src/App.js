import "./styles.css";
import Func from "./Func";

export default function App() {
  return (
    <div className="App">
      <Func input={["apple", "pear", "bread", "peach"]} />
      <Func input={false} />
      <Func input={12345} />
    </div>
  );
}
