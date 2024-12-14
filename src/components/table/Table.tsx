import { useEffect } from "react";
import useFetchProjects from "../../hooks/useFetchProjects";
import "./Table.css";

type Props = {
  headers: string[];
};

const Table = ({ headers }: Props) => {
  const { fetchProjects, loading, projects } = useFetchProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id="table-container">
      <div className="wrapper">
        {loading ? (
          <div className="loading-container">Loading...</div>
        ) : (
          <table className="content-table">
            <thead>
              <tr>
                {headers.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((item) => (
                <tr key={item["s.no"]}>
                  <td>{item["s.no"]}</td>
                  <td>{item["percentage.funded"]}%</td>
                  <td>{item["amt.pledged"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
