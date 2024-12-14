import "./App.css";
import Table from "./components/table/Table";

function App() {
  const columnHeaders = ["S.No", "Percentage funded", "Amount pledged"];

  return (
    <div className="containers">
      <div className="container one" />
      <div className="container two" />
      <div className="container three">
        <Table headers={columnHeaders} />
      </div>
    </div>
  );
}

export default App;
