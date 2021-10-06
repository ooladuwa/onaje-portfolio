import React from "react";
import TypeAnimation from "../helpers/TypeAnimation.js";
import "../animations.css";
import naj from "../assets/images/darkNaj.jpeg";
// import "../extra.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container  bg-goldenrod-yellow flex flex-col items-center justify-center py-4 min-w-full min-h-close">
        <img
          src={naj}
          alt="man who built site in circular frame"
          className="rounded-full h-48 w-48 tablet:h-56 tablet:w-56 laptop:h-72 laptop:w-72 border-2 border-solid border-golden-yellow"
        />
        <h2 className="mt-8 tablet:mt-16 text-2xl tablet:text-3xl laptop:text-4xl text-vampire-black">
          Hi, I'm Onaje. I...
        </h2>
        <TypeAnimation />
        <button className="btn-intro rounded-full py-2 px-4 mb-8 text-lg laptop:text-xl laptop:mb-16 transition">
          <a href="mailto:onaje.oladuwa@gmail.com">Get In Touch</a>
        </button>
        <div className="container flex justify-center mb-4">
          <a href="https://www.linkedin.com/in/ooladuwa/">
            <i className="fab fa-linkedin-in text-nd-blue hover:text-dome-gold text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
          </a>
          <a href="https://github.com/ooladuwa">
            <i className="fab fa-github-alt text-nd-blue hover:text-dome-gold text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
