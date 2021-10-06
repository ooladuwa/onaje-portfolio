import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container flex justify-start py-4 tablet:justify-start tablet:px-4 tablet:text-lg bg-grey-water min-w-full">
        <Link
          to="/"
          className="mr-4 tablet:mr-8 text-blue-minded hover:text-red-highlight"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="mr-4 text-blue-minded hover:text-red-highlight"
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
