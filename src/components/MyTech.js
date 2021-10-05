import React from "react";
import "../assets/styles/animations.css";

const MyTech = () => {
  return (
    <section id="myTech">
      <div className="flex flex-col items-center bg-irish-green py-4 min-w-full">
        <h2 className="text-nd-blue text-3xl mb-4">My Tech</h2>
        <p className="text-golden-yellow text-xl mb-6">
          Constant learner === Continued growth
        </p>
        <i className="fas fa-laptop text-nd-blue text-3xl mb-2"></i>
        <h3 className="text-golden-yellow text-xl">Front-end</h3>
        <ul className="flex flex-col items-center mb-6 text-nd-blue">
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
        <i className="fas fa-database text-nd-blue text-3xl mb-2"></i>
        <h3 className="text-golden-yellow text-xl">Back-end</h3>
        <ul className="flex flex-col items-center mb-6 text-nd-blue ">
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
        <i className="fas fa-tools text-nd-blue text-3xl mb-2"></i>
        <h3 className="text-golden-yellow text-xl">Tools</h3>
        <ul className="flex flex-col items-center mb-6 text-nd-blue ">
          <li>Github</li>
          <li>Postman</li>
          <li>npm</li>
          <li>Trello</li>
          <li>Slack</li>
          <li>Docker</li>
          <li>Agile Workflow</li>
        </ul>
      </div>
    </section>
  );
};

export default MyTech;
