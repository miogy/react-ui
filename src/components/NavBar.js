import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <Link to="/loaders" style={{ marginRight: "20px" }}>
          Loaders
        </Link>
        <Link to="/tab" style={{ marginRight: "20px" }}>
          Tab
        </Link>
        <Link to="/login" style={{ marginRight: "20px" }}>
          login
        </Link>
        <Link to="/signup" style={{ marginRight: "20px" }}>
          signup
        </Link>
        <Link to="/data" style={{ marginRight: "20px" }}>
          dataList
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
