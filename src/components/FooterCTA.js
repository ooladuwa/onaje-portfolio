import React from "react";

const FooterCTA = () => {
  return (
    <section id="footer-cta">
      <div className="flex flex-col items-center py-4 tablet:py-8 min-w-full bg-cloud text-blue-minded">
        <h2 className="m-4 text-2xl tablet:text-3xl">Want to collaborate?</h2>
        {/* <p className="m-4 text-lg tablet:text-xl">I'm available</p> */}
        <button className="btn rounded-full py-2 px-4 mb-4 text-lg laptop:text-xl laptop:mb-8 transition">
          <a href="mailto:onaje.oladuwa@gmail.com">Contact Me</a>
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;
