import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container flex justify-around py-2 mb-4 bg-metallic-gold min-w-full">
        <Link to="/" className="text-vampire-black hover:text-goldenrod-yellow">
          Home
        </Link>

        <Link
          to="/about"
          className="text-vampire-black hover:text-goldenrod-yellow"
        >
          About Me
        </Link>

        <Link
          to="/resume"
          className="text-vampire-black hover:text-goldenrod-yellow"
        >
          Resume
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
