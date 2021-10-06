import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container flex justify-start py-4 tablet:justify-start tablet:px-4 tablet:text-lg bg-vampire-black min-w-full">
        <Link
          to="/"
          className="mr-4 tablet:mr-8 text-dome-gold hover:text-golden-yellow"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="mr-4 text-dome-gold hover:text-golden-yellow"
        >
          About Me
        </Link>

        {/* <Link to="/resume" className="text-dome-gold hover:text-golden-yellow">
          Resume
        </Link> */}
      </div>
    </section>
  );
};

export default Navbar;
