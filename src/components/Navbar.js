import React from "react";
// import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div>
        <ul className="flex justify-between">
          <li className="mx-6">
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/about" className="text-blue-500 hover:text-blue-800">
              About Me
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/resume" className="text-blue-500 hover:text-blue-800">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
