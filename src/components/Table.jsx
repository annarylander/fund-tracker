import React from "react";

export default function Table({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] && columns.map((fund, i) => <th key={i}>{fund}</th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td> {row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
