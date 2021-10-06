import React from "react";
import blueWitness from "../assets/images/blue_witness.png";
import sfr from "../assets/images/secret_family_recipes.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="bg-goldenrod-yellow flex flex-col items-center justify-center p-4 tablet:p-8 min-w-full">
        <h2 className="text-vampire-black text-3xl mb-4 tablet:mb-8">
          My Projects
        </h2>
        <h4 className="text-xl mb-4 tablet:mb-8">
          Check out a sample of my work:
        </h4>

        <div className="bg-dome-gold rounded flex flex-col my-4 laptop:mb-16 laptop:justify-between min-w-full">
          <div
            id="project1"
            className="flex flex-col my-4 laptop:mb-16 laptop:flex laptop:flex-row laptop:justify-between flex-shrink-0"
          >
            <div className="mx-4 laptop:w-11/12">
              <img
                src={blueWitness}
                alt="screenshot of website displaying map with circular clusters of numbers"
              />
            </div>
            <div className="flex flex-col m-4 tablet:m-8 laptop:mt-0 laptop:w-11/12">
              <h3 className="text-nd-blue text-xl tablet:text-2xl laptop:text-3xl">
                Blue Witness Project
              </h3>
              <p className="text-irish-green my-2 tablet:my-4 tablet:text-xl laptop:text-2xl">
                Web
              </p>
              <p className="icons tablet:mb-4 laptop:mb:8">
                <i className="fas fa-desktop mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-tablet mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-mobile mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
              </p>
              <p className="tablet:text-xl tablet:my-2 laptop:text-2xl laptop:my-4">
                The Blue Witness Project is an app designed to collect and
                contextualize police use of force incidents in the USA.
                Crowd-sourced from Twitter, we create a platform where people
                can contribute to a single source of truth on the topic of
                police use-of-force.
              </p>
              <div className="flex text-irish-green mt-2">
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Lambda-School-Labs/human-rights-first-police-fe-a"
                >
                  FE Repo
                </a>
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Lambda-School-Labs/human-rights-first-police-be-a"
                >
                  BE Repo
                </a>
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://a.humanrightsfirst.dev/"
                >
                  Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-metallic-gold rounded flex flex-col my-4 laptop:mb-16  laptop:flex laptop:flex-row laptop:justify-between min-w-full">
          <div
            id="project2"
            className="flex flex-col my-4 laptop:mb-16  laptop:flex laptop:flex-row laptop:justify-between "
          >
            <div className="mx-4 laptop:w-11/12">
              <img
                src={sfr}
                alt="screenshot of webpage showing different recipe cards"
              />
            </div>
            <div className="flex flex-col m-4 tablet:m-8  laptop:mt-0 laptop:w-11/12">
              <h3 className="text-nd-blue text-xl tablet:text-2xl laptop:text-3xl">
                Secret Family Recipes BE
              </h3>
              <p className="text-irish-green my-2 tablet:my-4 tablet:text-xl laptop:text-2xl">
                Web
              </p>
              <p className="icons tablet:mb-4 laptop:mb:8">
                <i className="fas fa-desktop mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-tablet mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-mobile mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
              </p>
              <p className="tablet:text-xl tablet:my-2 laptop:text-2xl laptop:my-4">
                Secret Family Recipes BE has a Node.js/Express back-end app
                designed to provide a safe space to store, access, and
                contribute to the recipes that define communities. Users are
                able to create an account, login/logout, and create, store,
                edit, delete, and search recipes.
              </p>
              <div className="flex text-irish-green mt-2">
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/secret-family-recipes-6-pt"
                >
                  BE Repo
                </a>
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lambda-build-week-secret-recipes.netlify.app/"
                >
                  Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-golden-poppy rounded flex flex-col my-4 laptop:mb-16  laptop:flex laptop:flex-row laptop:justify-between min-w-full">
          <div
            id="project3"
            className="flex flex-col my-4 laptop:mb-16 laptop:flex laptop:flex-row laptop:justify-between "
          >
            <div className="mx-4 laptop:w-11/12">
              <img
                src={sfr}
                alt="screenshot of webpage displaying sign up form over people enjoying time together"
              />
            </div>

            <div className="flex flex-col m-4 tablet:m-8  laptop:mt-0 laptop:w-11/12 laptop:text-3xl">
              <h3 className="text-nd-blue text-xl tablet:text-2xl laptop:text-3xl">
                Secret Family Recipes FE
              </h3>
              <p className="text-irish-green my-2 tablet:my-4 tablet:text-xl laptop:text-2xl">
                Web
              </p>
              <p className="icons tablet:mb-4 laptop:mb:8">
                <i className="fas fa-desktop mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-tablet mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
                <i className="fas fa-mobile mr-4 tablet:mr-8 tablet:text-xl laptop:mr-10 laptop:text-2xl text-irish-green"></i>
              </p>
              <p className="tablet:text-xl tablet:my-2 laptop:text-2xl laptop:my-4">
                Secret Family Recipes FE is a React app designed to provide a
                safe space to store, access, and contribute to the recipes that
                define communities. Users are able to create an account,
                login/logout, and create, store, edit, delete, and search
                recipes.
              </p>
              <div className="flex text-irish-green mt-2">
                <a
                  className="btn-project rounded-full py-2 px-4 tablet:text-lg mr-4 tablet:mr-8 laptop:mr-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="Secret-family-recipes-tt-4/front-end: Our front-end group was fresh out of learning React, and we decided to take on Bootstrap with this project. Learning Bootstrap on the fly while creating this project was a fantastic experience"
                >
                  FE Repo
                </a>
              </div>
              {/* <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://potluck-azure.vercel.app"
              >
                Site
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
