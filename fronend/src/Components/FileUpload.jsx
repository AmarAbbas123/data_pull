import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [data, setData] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>Upload CSV File to Database</h2>
      <input
        type="file"
        className="form-control mb-2"
        accept=".csv"
        onChange={handleFileChange}
      />
      {/* Display CSV data with Bootstrap styling */}
      <table className="table table-striped table-bordered table-hover">
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Emplyee}</td>
              <td>{row.linkedin}</td>
              <td>{row.f_name}</td>
              <td>{row.l_name}</td>
              <td>{row.company}</td>
              <td>{row.title}</td>
              <td>{row.location}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileUpload;
