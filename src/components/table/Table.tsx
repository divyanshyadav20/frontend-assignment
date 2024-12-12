import { useEffect } from "react";
import useFetchProjects from "../../hooks/useFetchProjects";
import "./Table.css";

const Table = () => {
  const { fetchProjects, loading } = useFetchProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id="table-container">
      <div className="wrapper">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Loading...
          </div>
        ) : (
          <table className="content-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>20%</td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
