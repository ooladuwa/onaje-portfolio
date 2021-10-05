import React from "react";
import "../assets/styles/animations.css";

const MyTech = () => {
  return (
    <section id="myTech">
      <div className="flex flex-col items-center bg-irish-green py-4 tablet:py-8 laptop:py-12 min-w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-nd-blue text-2xl tablet:text-3xl laptop:text-4xl mb-6">
            My Tech
          </h2>
          <p className="text-golden-yellow text-xl tablet:text-2xl laptop:text-3xl mb-4">
            Constant learner === Continued growth
          </p>
        </div>
        <div className="flex flex-col items-center tablet:flex-row tablet:justify-around tablet:items-start min-w-full py-4">
          <div className="flex flex-col items-center">
            <i className="fas fa-laptop text-nd-blue text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
            <h3 className="text-golden-yellow text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
              Front-end
            </h3>
            <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl  text-nd-blue">
              <li>Javascript</li>
              <li>React JS</li>
              <li>HTML(5)</li>
              <li>Redux</li>
              <li>CSS(3)</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap(4)</li>
              <li>Foundation</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>Cypress</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-database text-nd-blue text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
            <h3 className="text-golden-yellow text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
              Back-end
            </h3>
            <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl text-nd-blue ">
              <li>Express</li>
              <li>Node JS</li>
              <li>Python</li>
              <li>Firebase</li>
              <li>Restful Web Services</li>
              <li>Api | Ajax</li>
              <li>CRUD</li>
              <li>Knex</li>
              <li>SQL</li>
              <li>SQLite(3)</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-tools text-nd-blue text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
            <h3 className="text-golden-yellow text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
              Tools
            </h3>
            <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl  text-nd-blue ">
              <li>Github</li>
              <li>Postman</li>
              <li>npm</li>
              <li>Trello</li>
              <li>Slack</li>
              <li>Docker</li>
              <li>Agile Workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTech;
