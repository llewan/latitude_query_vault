import React from 'react';
import Spinner from "../spinner/spinner";

interface Props {
  queryResult: Record<string, any>[],
  isLoading?: boolean;
}

const QueryViewer: React.FC<Props> = (props) => {
  const { queryResult, isLoading = false } = props;

  if (isLoading) return <Spinner />;

  if (!queryResult?.length) return <span>No data</span>;

  const theadData = Object.keys(queryResult[0]);

  return (
    <div className="QueryViewer">
      <h3>Query response</h3>
      <table className="QueryViewer-table">
        <thead className="QueryViewer-table-header">
          <tr>
            { theadData?.map(heading => (<th key={heading}>{heading}</th>)) }
          </tr>
        </thead>
        <tbody className="QueryViewer-table-body">
        { queryResult.map((row, index) => (
          <tr key={index}>
            { theadData.map((key, index) =>
              <td key={row[key]}>{row[key]}</td>
            )}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryViewer;
