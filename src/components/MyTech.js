import React from "react";
// import "./myTech.css";
import "../assets/styles/animations.css";

const MyTech = () => {
  return (
    <section id="myTech">
      <h2 className="">My Tech</h2>
      <p className="">Constant learner === Continued growth</p>
      <div className="">
        <div className=" ">
          <i className="fas fa-laptop"></i>
          <h3>Front-end</h3>
          <ul>
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
        <div className="">
          <i className="fas fa-database"></i>
          <h3>Back-end</h3>
          <ul>
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
        <div className="">
          <i className="fas fa-tools"></i>
          <h3>Tools</h3>
          <ul>
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
    </section>
  );
};

export default MyTech;
