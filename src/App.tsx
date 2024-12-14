import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import useFetchProjects from "./hooks/useFetchProjects";
import Pagination from "./components/pagination/Pagination";

const ITEMS_PER_PAGE = 5;
const HEADERS = [
  { key: "s.no", header: "S.No." },
  { key: "percentage.funded", header: "Percentage funded" },
  { key: "amt.pledged", header: "Amount pledged" },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchProjects, loading, projects } = useFetchProjects();

  // Calculate pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="containers">
      <div className="container one" />
      <div className="container two" />
      <div className="container three">
        <div className="table-container">
          <div className="wrapper">
            <Table columns={HEADERS} loading={loading} data={currentItems} />
            <Pagination
              totalItems={projects.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
