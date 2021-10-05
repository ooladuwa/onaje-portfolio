import React from "react";
import PdfViewer from "./PdfViewer";
// import "./resume.css";

const Resume = () => {
  return (
    <section id="resumeContainer">
      <div className="container  bg-goldenrod-yellow flex flex-col items-center justify-center py-4 min-w-full min-h-close">
        {/* <h1>My Tech Resume</h1> */}
        <div className="self-center flex justify-center border-4 border-nd-blue w-4/6">
          <PdfViewer />
        </div>
      </div>
    </section>
  );
};

export default Resume;
