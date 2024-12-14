import { Project } from "../../types/project";
import "./Table.css";

type Column = {
  key: string;
  header: string;
};

type Props = {
  columns: Column[];
  data: Project[];
  loading: boolean;
};

const Table = ({ columns, loading, data }: Props) => {
  return (
    <div id="table-container">
      <div className="wrapper">
        {loading ? (
          <div className="loading-container">Loading...</div>
        ) : (
          <table className="content-table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key}>{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={`${index}-${column.key}`}>
                      {row[column.key as keyof Project]}
                    </td>
                  ))}
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
