import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypeAnimation = () => {
  const element = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "FULL-STACK WEB DEVELOPER",
        "EXPERIENCED EDUCATOR",
        "RECHARGE VIA TRAVEL",
        "COMPLEX PROBLEM SOLVER!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
    };
    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="text-minion text-lg tablet:text-2xl laptop:text-4xl p-6 mt-6 mb-6 tablet:mb-8">
      <span ref={element} />
    </div>
  );
};

export default TypeAnimation;
