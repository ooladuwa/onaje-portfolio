import React from "react";
// import "./footerCTA.css";

const FooterCTA = () => {
  return (
    <section id="footer-cta">
      <div className="cta">
        <h2 className="text-center">Want to collaborate?</h2>
        <p className="text-center">I'm available</p>
      </div>
      <div className="cta">
        <a
          className="my-button form-button"
          href="mailto:onaje.oladuwa@gmail.com"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
