import React from "react";
// import "./footerCTA.css";

const FooterCTA = () => {
  return (
    <section id="footer-cta">
      <div className="flex flex-col items-center py-4 tablet:py-8 min-w-full bg-chinese-black text-dome-gold">
        <h2 className="text-2xl tablet:text-3xl">Want to collaborate?</h2>
        <p className="m-4 text-lg tablet:text-xl">I'm available</p>
        <a
          className="btn-cta tablet:text-xl"
          href="mailto:onaje.oladuwa@gmail.com"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
