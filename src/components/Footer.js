import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container  bg-sheen text-blue-minded flex flex-col items-center py-2 min-w-full">
        <div className="flex justify-center my-4 border-2 border-solid border-blue-minded rounded-full bg-lighter-grey text-blue-minded">
          <p className="py-1 px-1">OO</p>
        </div>
        <p id="copyright">Copyright &copy; 2021 | Onaje Oladuwa</p>
      </div>
    </footer>
  );
};

export default Footer;
