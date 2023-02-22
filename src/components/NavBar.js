import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
}

export default NavBar;
