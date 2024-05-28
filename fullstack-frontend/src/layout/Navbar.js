import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for additional styles

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CineMo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* Add more nav items here if needed */}
          </ul>
          <Link className="btn btn-outline-light" to="/addmovie">
            Add Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}
