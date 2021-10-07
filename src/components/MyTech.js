import React from "react";
import developer from "../assets/images/developer.svg";

const MyTech = () => {
  return (
    <section id="myTech">
      <div className="container flex flex-col items-center bg-cloud py-4 tablet:py-8 laptop:py-12 min-w-full">
        <div className="container rounded-3xl shadow-2xl flex flex-col items-center bg-onyx py-4 tablet:py-8 laptop:py-12 min-w-3/6">
          <div className="flex flex-col items-center">
            <h2 className="text-sheen text-2xl tablet:text-3xl laptop:text-4xl">
              My Tech
            </h2>
            <img
              src={developer}
              alt=""
              className="h-48 w-48 tablet:h-56 tablet:w-56 laptop:h-72 laptop:w-72 mt-8 laptop:mt-12 laptop:mb-8"
            />
            {/* <p className="text-red-highlight text-xl tablet:text-2xl laptop:text-3xl mb-4">
              Constant learner === Continued growth
            </p> */}
          </div>
          <div className="flex flex-col items-center tablet:flex-row tablet:justify-around tablet:items-start min-w-full py-4 min-h-0">
            <div className="bg-cloud rounded-xl shadow-xl m-8 p-10 laptop:pb-14 laptop:ml-9 flex flex-col items-center min-h-1/4">
              <i className="fas fa-laptop text-sheen text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
              <h3 className="text-blue-minded text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
                Front-end
              </h3>
              <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl  text-vampire-black">
                <li>Javascript</li>
                <li>React JS</li>
                <li>HTML(5)</li>
                <li>Redux</li>
                <li>CSS(3)</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap(4)</li>
                <li>Jest</li>
                {/* <li>React Testing Library</li> */}
                <li>Cypress</li>
              </ul>
            </div>
            <div className="bg-cloud rounded-xl shadow-xl p-12 m-8 flex flex-col items-center min-h-1/4">
              <i className="fas fa-database text-sheen text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
              <h3 className="text-blue-minded text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
                Back-end
              </h3>
              <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl text-vampire-black">
                <li>Express</li>
                <li>Node JS</li>
                <li>Python</li>
                <li>Firebase</li>
                {/* <li>Restful Web Services</li> */}
                <li>Api | Ajax</li>
                <li>CRUD</li>
                <li>Knex</li>
                <li>SQL</li>
                <li>SQLite(3)</li>
              </ul>
            </div>
            <div className="bg-cloud rounded-xl shadow-xl p-8 m-8 laptop:pb-14 flex flex-col items-center min-h-1/4">
              <i className="fas fa-tools text-sheen text-3xl laptop:text-4xl mb-2 tablet:mb-4 laptop:mb-6"></i>
              <h3 className="text-blue-minded text-xl tablet:text-2xl laptop:text-3xl mb-2 tablet:mb-4 laptop:mb-6">
                Tools
              </h3>
              <ul className="flex flex-col items-center mb-6 text-lg tablet:text-xl laptop:text-2xl  text-vampire-black pb-16">
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
      </div>
    </section>
  );
};

export default MyTech;
