import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container flex justify-center py-4 tablet:justify-center tablet:px-4 tablet:text-lg bg-cloud min-w-full">
        <Link
          to="/"
          className="mr-16 tablet:mr-32 text-blue-minded hover:text-red-highlight"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="ml-16 tablet:ml-32 text-blue-minded hover:text-red-highlight"
        >
          About Me
        </Link>

        {/* <Link to="/resume" className="text-blue-minded hover:text-red-highlight">
          Resume
        </Link> */}
      </div>
    </section>
  );
};

export default Navbar;
