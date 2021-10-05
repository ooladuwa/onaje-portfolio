import React from "react";
import TypeAnimation from "../helpers/TypeAnimation.js";
import "../assets/styles/animations.css";
import naj from "../assets/images/darkNaj.jpeg";
// import video from "../../assets/videos/video-1.mp4";

const Intro = () => {
  return (
    <section id="intro">
      {/* <video src={video} autoPlay loop muted /> */}
      <div className="container text-dome-gold flex flex-col items-center py-4 min-w-full">
        <img
          src={naj}
          alt="man who built site in circular frame"
          className="rounded-full h-48 w-48 border-2 border-solid border-golden-yellow"
        />
        <h2 className="mt-4 mb-4 text-3xl text-vampire-black">
          Hi, I'm Onaje. I...
        </h2>
        <TypeAnimation />
        <div className="btn-intro mb-4 py-3 px-6 transition">
          <a href="mailto:onaje.oladuwa@gmail.com">Get In Touch</a>
        </div>
        <div className="container flex justify-center mb-4">
          <a href="https://www.linkedin.com/in/ooladuwa/">
            <i className="fab fa-linkedin-in text-xl mx-4"></i>
          </a>
          <a href="https://github.com/ooladuwa">
            <i className="fab fa-github-alt text-xl mx-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
