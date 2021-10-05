import React from "react";
import "../assets/styles/animations.css";
import blueWitness from "../assets/images/blue_witness.png";
import sfr from "../assets/images/secret_family_recipes.png";
import potluck from "../assets/images/potluck_planner.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col items-center py-4 min-w-full bg-hero">
        <h2 className="text-nd-blue text-3xl mb-4">My Projects</h2>
        <h4>Check out a sample of my work:</h4>
      </div>

      <div className="">
        <div className="">
          <img
            src={blueWitness}
            alt="screenshot of website displaying map with circular clusters of numbers"
          />
        </div>
        <div className="">
          <h3>Blue Witness Project</h3>
          <p className="">Web</p>
          <p className="icons">
            <i className="fas fa-desktop"></i>
            <i className="fas fa-tablet"></i>
            <i className="fas fa-mobile"></i>
          </p>
          <p>
            The Blue Witness Project is an app designed to collect and
            contextualize police use of force incidents in the USA.
            Crowd-sourced from Twitter, we create a platform where people can
            contribute to a single source of truth on the topic of police
            use-of-force.
          </p>
          <div className="">
            <div className="">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Lambda-School-Labs/human-rights-first-police-fe-a"
              >
                FE Repo
              </a>
            </div>
            <div className="">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Lambda-School-Labs/human-rights-first-police-be-a"
              >
                BE Repo
              </a>
            </div>
            <div className="">
              <a
                className=""
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

      <div className="">
        <div className="">
          <img
            className=""
            src={sfr}
            alt="screenshot of webpage showing different recipe cards"
          />
        </div>
        <div className="">
          <h3>Secret Family Recipes</h3>
          <p className="">Web</p>
          <p className="icons">
            <i className="fas fa-desktop"></i>
            <i className="fas fa-tablet"></i>
            <i className="fas fa-mobile"></i>
          </p>
          <p>
            Secret Family Recipes is a React front-end Node.js/Express back-end
            app designed to provide a safe space to store, access, and
            contribute to the recipes that define communities. Users are able to
            create an account, login/logout, and create, store, edit, delete,
            and search recipes.
          </p>
          <div className="">
            <div className="">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/secret-family-recipes-6-pt"
              >
                BE Repo
              </a>
            </div>
            <div className="">
              <a
                className=""
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

      <div className="">
        <div className="">
          <img
            className=""
            src={potluck}
            alt="screenshot of webpage displaying sign up form over people enjoying time together"
          />
        </div>
        <div className="">
          <h3>Potluck Planner</h3>
          <p className="">Web</p>
          <p className="icons">
            <i className="fas fa-desktop"></i>
            <i className="fas fa-tablet"></i>
            <i className="fas fa-mobile"></i>
          </p>
          <p>
            Potluck Planner utilizes React for front-end and Redux for
            state-management designed to aid users in all stages of potluck
            planning and execution through a collective platform which
            transforms a normally solitary process into a community experience.
          </p>
          <div className="">
            <div className="">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/orgs/potluck-tt4/repositories"
              >
                FE Repo
              </a>
            </div>
            <div className="">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://potluck-azure.vercel.app"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
