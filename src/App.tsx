import "./App.css";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="containers">
      <div className="container one" />
      <div className="container two" />
      <div className="container three">
        <Table />
      </div>
    </div>
  );
}

export default App;
