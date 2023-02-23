import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <Link to="/dashboard" style={{ marginRight: "20px" }}>
          dashboard
        </Link>
        <Link to="/about" style={{ marginRight: "20px" }}>
          about
        </Link>
        <Link to="/login" style={{ marginRight: "20px" }}>
          login
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
