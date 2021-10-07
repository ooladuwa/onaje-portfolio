import React from "react";
// import { Text, SVG } from "../helpers/Spring.js";
import dev from "../assets/images/about-dev.svg";
// import leaf from "../assets/images/about-leaf.svg";
// import travel from "../assets/images/about-travel.svg";
// import hanging from "../assets/images/hanging.jpg";
import saban from "../assets/images/saban.jpg";

const About = () => {
  return (
    <section id="about">
      {/* <div>{SVG}</div> */}
      <div className="container bg-onyx flex flex-col items-center justify-center min-w-full min-h-full pt-6 laptop:px-18">
        <div className="container flex flex-col justify-center items-center min-w-full mt-2">
          <h5 className="self-center text-med text-lav">
            You've scrutinized my knowledge base...
          </h5>
          <h4 className="self-center text-med text-violet">
            and measured my capabilities...
          </h4>
          <h3 className="self-center text-xl text-minion mt-4">
            but who AM I?
          </h3>
          {/* <button className="btn" onClick={Text}>
              find out
            </button> */}
          <h1 className="text-4xl text-sheen mt-4">Call me Naj.</h1>
          <img
            src={dev}
            alt=""
            className="h-48 w-48 my-8 tablet:h-56 tablet:w-56 laptop:h-72 laptop:w-72  laptop:mt-12 laptop:mb-8"
          />
        </div>
        <div className="container flex flex-col text-rich text-xl min-w-full">
          <img src={saban} alt="" className="mb-6" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
