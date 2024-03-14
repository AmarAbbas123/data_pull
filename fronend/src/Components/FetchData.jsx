import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataTable.css";

const FetchData = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjusted for demonstration
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/pull");
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }
    fetchData();
  }, []);

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.l_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage(currentPage + 1 > totalPages ? totalPages : currentPage + 1);
  const prevPage = () =>
    setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1);

  return (
    <div className="data-table">
      {/* Search input */}
      <div className="table-header">
        <h2>Fetch data from database</h2>
        <input
          type="text"
          placeholder="Search by Last Name"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to the first page for new search results
          }}
          className="search-input"
        />
      </div>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Index (Page)</th>
            <th>LinkedIn</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Title</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
              <td>{item.linkedin}</td>
              <td>{item.f_name}</td>
              <td>{item.l_name}</td>
              <td>{item.company}</td>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                prevPage();
              }}
              href="#!"
              className="page-link"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                nextPage();
              }}
              href="#!"
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FetchData;
