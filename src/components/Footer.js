import React from "react";
// import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container  bg-chinese-black text-dome-gold flex flex-col items-center py-2 min-w-full">
        <div className="flex justify-center my-4 border-2 border-solid border-dome-gold rounded-full bg-vampire-black text-dome-gold">
          <p className="py-1 px-1">OO</p>
        </div>
        <p id="copyright">Copyright &copy; 2021 | Onaje Oladuwa</p>
      </div>
    </footer>
  );
};

export default Footer;
