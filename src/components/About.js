import React from "react";
// import { Text, SVG } from "../helpers/Spring.js";
import dev from "../assets/images/about-dev.svg";
// import leaf from "../assets/images/about-leaf.svg";
import travel from "../assets/images/about-travel.svg";
import hanging from "../assets/images/about-hanging.svg";
import saban from "../assets/images/about-saban.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container bg-onyx flex flex-col items-center justify-center min-w-full min-h-full pt-6 laptop:px-18">
        <div className="container flex flex-col justify-center items-center min-w-full m-2 tablet:mt-4 laptop:mt-8">
          <h5 className="self-center text-lg text-lav tablet:text-xl laptop:text-2xl">
            You've scrutinized my knowledge base...
          </h5>
          <h4 className="self-center text-lg text-violet tablet:text-xl laptop:text-2xl">
            measured my capabilities...
          </h4>
          <h3 className="self-center text-xl text-sheen mt-4 tablet:text-3xl laptop:text-4xl">
            but, who am I?
          </h3>
          <h1 className="text-4xl text-minion my-4 tablet:text-5xl laptop:text-6xl">
            Call me Naj.
          </h1>
          <img
            src={dev}
            alt="developer at desk wearing headphones with a green and white background"
            className="h-48 w-48 my-8 tablet:h-60 tablet:w-60 laptop:h-80 laptop:w-80  laptop:mt-12"
          />
        </div>
        <div className="container flex justify-center text-rich pb-8 min-w-3/4">
          <img
            src={saban}
            alt="quote from Nick Saban, Alabama Football Coach in black text with white background. Two greenish leave extend from body of quote"
            className="h-auto w-auto tablet:h-48 tablet:w-auto laptop:h-64 laptop:w-auto"
          />
        </div>
      </div>

      <div className="container bg-violet text-vamp flex flex-col justify-center items-center text-xl min-w-full p-4 tablet:text-2xl tablet:p-6 laptop:text-3xl laptop:p-8">
        <div className="container flex justify-center">
          <img
            src={travel}
            alt="figure in grey track suit with lavender accents. There is a white background with agua-green leaves behind figure. There are four icons: a boat, bicycle, airplane, and train"
            className=" h-auto w-auto mb-4 tablet:h-56 tablet:w-64 laptop:h-72 laptop:w-80"
          />
        </div>
        <div>
          <p>
            I'm a full-stack software engineer experienced in JavaScript based
            programming with a passion for travel, family, growing food, and
            building community. Long fascinated by translating deep thought into
            action, I've learned to embrace the challenges curiosity sometimes
            brings. My personal and professional arc is exploration,
            interaction, failure, resiliency, growth, and continuous learning
            and refinement.
          </p>
          <br />
          <p>
            Since adulting began, I graduated from{" "}
            <a
              href="https://www.tufts.edu"
              className="underline hover:text-silver"
            >
              Tufts University
            </a>{" "}
            where I studied in a{" "}
            <a
              href="https://www.macjannet.org/history-of-le-prieureacute.html"
              className="underline hover:text-silver"
            >
              1,000 year-old monastery
            </a>{" "}
            and water-skied on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Lake_Annecy"
              className="underline hover:text-silver"
            >
              cleanest lake
            </a>{" "}
            in Europe, became a long-haul trucker, short-order cook, writer,
            hitch-installer, tutor, landscape architect, student, bartender,
            ice-cream entrepreneur, pedicab driver, educational consultant, and
            farmer. Along the way, I drove America coast-to-coast-to-coast
            several times, moved to a{" "}
            <a
              href="https://www.visittheusa.com/destination/st-john"
              className="underline hover:text-silver"
            >
              tropical island
            </a>
            , called a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Lula,_Mississippi"
              className="underline hover:text-silver"
            >
              town{" "}
            </a>
            of less than 400 people home directly after residing in a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Allin_House"
              className="underline hover:text-silver"
            >
              {" "}
              home{" "}
            </a>{" "}
            on the National Register of Historic Places, lived and worked{" "}
            <a
              href="https://en.wikipedia.org/wiki/Cheonan"
              className="underline hover:text-silver"
            >
              abroad
            </a>
            , spent weeks in solitude and/or{" "}
            <a
              href="https://www.dhamma.org/en-US/index"
              className="underline hover:text-silver"
            >
              silent meditation
            </a>
            , and rode my{" "}
            <a
              href="https://www.motorcycle.com/specs/kawasaki/cruiser/2009/vulcan-reg-900/classic.html"
              className="underline hover:text-silver"
            >
              Kawasaki Vulcan
            </a>{" "}
            900 Classic on the world-famous{" "}
            <a
              href="https://roadtrippers.com/tail-of-the-dragon/"
              className="underline hover:text-silver"
            >
              Tail of the Dragon
            </a>
            .
          </p>
          <br />
          <p>
            I relished these experiences, but it was as a{" "}
            <a
              href="https://roadtrippers.com/tail-of-the-dragon/"
              className="underline hover:text-silver"
            >
              TFA Corps Member
            </a>
            , I found purpose and fell in love. I've been called teacher,
            department-chair, grade-level-manager, mentor, and coach while
            working with diverse populations, building community, and
            implementing restorative practices/social-emotional learning. A
            team-first, results-driven contributor, I bring my whole, authentic
            self to every project regardless of role.
          </p>
          <br />
          <p>
            There are, for me, parallels between education and tech.{" "}
            <a
              href="https://files.eric.ed.gov/fulltext/ED606970.pdf"
              className="underline hover:text-silver"
            >
              Public education
            </a>{" "}
            is an extremely young field. Practices evolve quickly, collaboration
            is fundamental to professional and personal growth, and the desire
            to constantly improve is paramount. A code base is a microcosm of a
            classroom. A file is a class; a function a student - different
            histories and disparate needs, but a common end-goal. Each child -
            each line of code - has a specific identity and purpose; it matters.
            One correct solution does not exist; just like a child, code must be
            shaped and guided through careful consideration and deliberate
            action. It is in the confluence between teaching and coding that I
            seek a home for my skill-set and desire to provide genuine and
            meaningful contributions to colleagues, stakeholders, and end-users.
          </p>
          <br />
          <p>
            <strong>What's next:</strong>
            <br /> *** Develop a platform to engage my passion for creating a
            better tomorrow.
            <br /> *** Feed my drive to contribute to the betterment of our
            human space through tech via networking and idea-sharing.
            <br /> *** Continue to engage with complex problems and emerge with
            greater clarity and elegant solutions.
            <br /> *** Secure a position that empowers me to utilize skills
            forged in education to mentor and develop a new generation of{" "}
            <a
              href="https://www.computerworld.com/article/3574917/the-state-of-ethnic-minorities-in-us-tech-2020.html"
              className="underline hover:text-silver"
            >
              folk
            </a>{" "}
            under-represented in tech space.
          </p>
        </div>
        <div className="container flex justify-center m-4">
          <img
            src={hanging}
            alt="developer hanging off wall over blue ocean water"
            className="h-80 w-auto mt-4"
          />
        </div>
      </div>
    </section>
  );
};
// tablet:h-56 tablet:w-64 laptop:h-auto laptop:w-auto
export default About;
