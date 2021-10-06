import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container flex justify-around py-4 tablet:justify-between tablet:px-4 tablet:text-lg bg-vampire-black min-w-full">
        <Link to="/" className="text-dome-gold hover:text-golden-yellow">
          Home
        </Link>

        <Link to="/about" className="text-dome-gold hover:text-golden-yellow">
          About Me
        </Link>

        <Link to="/resume" className="text-dome-gold hover:text-golden-yellow">
          Resume
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
