import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#photos"
          onClick={() => props.handlePageChange("photos")}
          className={props.currentPage === "Photos" ? "nav-link active" : "nav-link"}
        >
          Photos
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#port"
          onClick={() => props.handlePageChange("port")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
