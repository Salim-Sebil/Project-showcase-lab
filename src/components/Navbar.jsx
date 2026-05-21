import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/products">
        Products
      </Link>

      <Link to="/add-product">
        Admin Portal
      </Link>
    </nav>
  );
}

export default Navbar;