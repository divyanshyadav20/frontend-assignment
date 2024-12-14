import { useEffect } from "react";
import "./App.css";
import Table from "./components/table/Table";
import useFetchProjects from "./hooks/useFetchProjects";

const HEADERS = [
  { key: "s.no", header: "S.No." },
  { key: "percentage.funded", header: "Percentage funded" },
  { key: "amt.pledged", header: "Amount pledged" },
];

function App() {
  const { fetchProjects, loading, projects } = useFetchProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="containers">
      <div className="container one" />
      <div className="container two" />
      <div className="container three">
        <Table columns={HEADERS} loading={loading} data={projects} />
      </div>
    </div>
  );
}

export default App;
