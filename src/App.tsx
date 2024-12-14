import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import useFetchProjects from "./hooks/useFetchProjects";
import Pagination from "./components/pagination/Pagination";
import { Toaster } from "sonner";

const ITEMS_PER_PAGE = 5;
const HEADERS = [
  { key: "s.no", header: "S.No." },
  { key: "percentage.funded", header: "Percentage funded" },
  { key: "amt.pledged", header: "Amount pledged" },
];

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("page")) || 1;
  });
  const { fetchProjects, loading, projects } = useFetchProjects();

  // Calculate pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", currentPage.toString());
    window.history.pushState({}, "", `?${params.toString()}`);
  }, [currentPage]);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="containers">
      <Toaster richColors />
      <div className="container one" />
      <div className="container two" />
      <div className="container three">
        <div className="table-container">
          <div className="wrapper">
            <Table columns={HEADERS} loading={loading} data={currentItems} />
            <Pagination
              loading={loading}
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
