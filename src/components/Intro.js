import React from "react";
import TypeAnimation from "../helpers/TypeAnimation.js";
import "../helpers/animations.css";
import naj from "../assets/images/darkNaj.jpeg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container bg-jet flex flex-col items-center justify-center min-w-full min-h-full laptop:px-18">
        <div className="container rounded-3xl p-8 mt-14 bg-rich shadow-2xl flex flex-col items-center justify-center">
          <img
            src={naj}
            alt="man who built site in circular frame"
            className="rounded-full shadow-lg h-48 w-48 tablet:h-56 tablet:w-56 laptop:h-80 laptop:w-80"
          />
          <h2 className="mt-4 tablet:mt-8 text-xl tablet:text-2xl laptop:text-4xl text-lav">
            Hello,
          </h2>
          <h2 className="mt-4 tablet:mt-8 text-2xl tablet:text-3xl laptop:text-5xl text-lav">
            I'm Onaje.
          </h2>
          <TypeAnimation />
          <button className="btn rounded-full text-lg laptop:text-xl laptop:mb-12 transition">
            <a href="mailto:onaje.oladuwa@gmail.com">Get In Touch</a>
          </button>
          <div className="container flex justify-center mb-4">
            <a href="https://www.linkedin.com/in/ooladuwa/">
              <i className="fab fa-linkedin-in text-lav hover:text-sheen text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
            </a>
            <a href="https://github.com/ooladuwa">
              <i className="fab fa-github-alt text-lav hover:text-sheen text-xl tablet:text-2xl laptop:text-3xl mx-4 tablet:mx-8"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
