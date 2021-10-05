import React from "react";
import PdfViewer from "./PdfViewer";
// import "./resume.css";

const Resume = () => {
  return (
    <section id="resumeContainer">
      <div className="container  bg-irish-green flex flex-col items-center justify-center p-12 min-w-full">
        <div className="container flex justify-center bg-goldenrod-yellow m-8 p-24">
          <div className="flex justify-center bg-nd-blue m-8 p-8 w-11/12">
            <PdfViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
