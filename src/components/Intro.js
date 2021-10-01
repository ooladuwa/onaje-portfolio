import React from "react";
import TypeAnimation from "../helpers/TypeAnimation.js";
import "../assets/styles/animations.css";
import naj from "../assets/images/darkNaj.jpeg";
// import video from "../../assets/videos/video-1.mp4";

const Intro = () => {
  return (
    <section id="intro" className="item-center">
      {/* <video src={video} autoPlay loop muted /> */}
      <div className="container bg-hero bg-local min-w-full mx-auto flex px-10 py-20 flex-col justify-center align-center text-dome-gold">
        <img
          src={naj}
          alt="man who built site in circular frame"
          className="rounded-full h-48 w-48 border-2 border-solid border-golden-yellow"
        />
        <h2 className="m-2">Hi, I'm Onaje. I...</h2>
        <TypeAnimation />
        <div className="btn m-4">
          <a href="mailto:onaje.oladuwa@gmail.com">Get In Touch</a>
        </div>
        <div className="flex justify-center align-middle">
          <a href="https://www.linkedin.com/in/ooladuwa/">
            <i className="fab fa-linkedin-in mr-8"></i>
          </a>
          <a href="https://github.com/ooladuwa">
            <i className="fab fa-github-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
