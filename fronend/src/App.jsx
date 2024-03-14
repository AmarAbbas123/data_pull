import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchData from "./Components/FetchData";
import FileUpload from "./Components/FileUpload";
import "./App.css";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="app-header">
          <Link to="/" className="menu-logo">
            MyApp
          </Link>
          <button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? "✕" : "☰"} {/* Dynamically change icon */}
          </button>
          <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
 <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Data Fetch
              </Link>
            </li>
            <li>
              <Link to="/upload-file" onClick={() => setIsMenuOpen(false)}>
                Upload File
              </Link>
            </li>
           
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<FetchData />} />
            <Route path="/upload-file" element={<FileUpload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
