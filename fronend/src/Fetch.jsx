import React, { useState } from "react";
import Papa from "papaparse";
import "./style.css";

function Fetch() {
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setData(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  if (data.length === 0) {
    return (
      <div className="container mt-5">
        <input
          type="file"
          accept=".csv"
          className="form-control"
          onChange={handleFileChange}
        />
        <p className="text-muted mt-3">No data to display</p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div className="table-responsive">
        {" "}
        {/* Make table responsive */}
        <table className="table table-bordered table-hover">
          {" "}
          {/* Add Bootstrap classes for styling */}
          <thead className="thead-dark">
            {" "}
            {/* Use a darker theme for the header */}
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, columnIndex) => (
                  <td key={columnIndex}>{row[header] || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fetch;
