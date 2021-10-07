import React from "react";
import dev from "../assets/images/about-dev.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container bg-jet flex flex-col items-center justify-center min-w-full min-h-close laptop:px-18">
        <img src={dev} alt="" className="h-48 w-48" />
        <div className="container bg-violet mt-48 flex flex-col text-rich text-xl">
          <p className="">Here's a little bit</p>
          <h1 className="">About Me</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
