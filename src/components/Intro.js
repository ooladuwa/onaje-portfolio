import React from "react";
import TypeAnimation from "../helpers/TypeAnimation.js";
import "../helpers/animations.css";
import naj from "../assets/images/darkNaj.jpeg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container bg-grey-water flex flex-col items-center justify-center min-w-full min-h-close">
        <div className="container rounded p-8 bg-light-grey shadow-2xl flex flex-col items-center min-w-3/6 justify-center">
          <img
            src={naj}
            alt="man who built site in circular frame"
            className="rounded-full shadow-lg h-48 w-48 tablet:h-56 tablet:w-56 laptop:h-80 laptop:w-80 border-2 border-solid border-bright-red box"
          />
          <h2 className="mt-4 tablet:mt-8 text-xl tablet:text-2xl laptop:text-4xl text-blue-minded">
            Hello,
          </h2>
          <h2 className="mt-4 tablet:mt-8 text-2xl tablet:text-3xl laptop:text-5xl text-blue-minded">
            I'm Onaje.
          </h2>
          <TypeAnimation />
          <button className="btn rounded-full py-2 px-4 mb-8 text-lg laptop:text-xl laptop:mb-12 transition">
            <a href="mailto:onaje.oladuwa@gmail.com">Get In Touch</a>
          </button>
          <div className="container flex justify-center mb-4">
            <a href="https://www.linkedin.com/in/ooladuwa/">
              <i className="fab fa-linkedin-in text-blue-minded hover:text-red-highlight text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
            </a>
            <a href="https://github.com/ooladuwa">
              <i className="fab fa-github-alt text-blue-minded hover:text-red-highlight text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
