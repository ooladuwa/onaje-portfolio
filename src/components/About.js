import React from "react";
import dev from "../assets/images/about-dev.svg";
import leaf from "../assets/images/about-leaf.svg";
import travel from "../assets/images/about-travel.svg";
import hanging from "../assets/images/hanging.jpg";
import saban from "../assets/images/saban.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container bg-onyx flex flex-col items-center justify-center min-w-full min-h-close pt-12 laptop:px-18">
        <div className="border-2 border-minion border-solid container flex flex-col justify-center items-center min-w-full">
          <p className="pt-16">Here's a little bit</p>
          <h1 className="pt-16">About Me</h1>
          <img
            src={dev}
            alt=""
            className="h-48 w-48 my-8 tablet:h-56 tablet:w-56 laptop:h-72 laptop:w-72  laptop:mt-12 laptop:mb-8"
          />
        </div>

        <div className="container bg-violet mt-48 flex flex-col text-rich text-xl min-w-3/4">
          <img src={saban} alt="" className="h-48 w-1/2 self-center" />
        </div>
      </div>
    </section>
  );
};

export default About;
