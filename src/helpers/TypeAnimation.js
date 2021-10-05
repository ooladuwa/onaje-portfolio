import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
// import randomColor from "randomcolor";

const TypeAnimation = () => {
  const element = useRef(null);
  const typed = useRef(null);
  // const [random, setRandom] = useState({ display: false });
  useEffect(() => {
    // let random = randomColor();
    const options = {
      strings: [
        "am a Full-Stack Web Developer.",
        "am an experienced educator",
        "recharge via travel and farming",
        "thrive when solving complex problems!",
      ],
      // color: random,
      typeSpeed: 50,
      backSpeed: 25,
      // loop: true,
      // shuffle: true,
    };
    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="">
      <span ref={element} />
    </div>
  );
};

export default TypeAnimation;
