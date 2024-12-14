import { Project } from "../../types/project";
import { CircleAlertIcon, LoaderCircle } from "lucide-react";
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
  if (loading) {
    return (
      <div role="status" aria-live="polite" className="loading-container">
        <LoaderCircle className="animate-spin" />
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="empty-state">
        <CircleAlertIcon size={40} color="gray" />
        <p>No data</p>
      </div>
    );
  }

  return (
    <table className="content-table" aria-label="Projects data table">
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
  );
};

export default Table;
