import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypeAnimation = () => {
  const element = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "am a Full-Stack Web Developer.",
        "am an experienced educator",
        "recharge via travel and farming",
        "thrive when solving complex problems!",
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
    <div className="text-dome-gold text-lg tablet:text-xl laptop:text-2xl p-6 rounded mt-8 mb-8 tablet:mb-16 bg-nd-blue">
      <span ref={element} />
    </div>
  );
};

export default TypeAnimation;
