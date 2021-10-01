import React from "react";
import PdfViewer from "./PdfViewer";
// import "./resume.css";

const Resume = () => {
  return (
    <section id="resumeContainer">
      <div className="pdfContainer">
        {/* <h1>My Tech Resume</h1> */}
        <div className="resume">
          <PdfViewer />
        </div>
      </div>
    </section>
  );
};

export default Resume;
