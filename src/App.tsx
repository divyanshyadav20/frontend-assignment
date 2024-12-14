import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import useFetchProjects from "./hooks/useFetchProjects";
import Pagination from "./components/pagination/Pagination";
import { motion } from "framer-motion";
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
      <motion.div
        className="container one"
        initial={{ rotate: 0 }}
        animate={{ rotate: -6 }}
        transition={{
          delay: 0.8,
          duration: 1,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="container two"
        initial={{ rotate: 0 }}
        animate={{ rotate: -3 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="container three"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
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
      </motion.div>
    </div>
  );
}

export default App;
