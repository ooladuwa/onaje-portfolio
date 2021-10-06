import React from "react";
import PdfViewer from "./PdfViewer";
// import "./resume.css";

const Resume = () => {
  return (
    <section id="resumeContainer">
      <div className="container  laptop:bg-irish-green bg-goldenrod-yellow flex flex-col items-center justify-center p-12 min-w-full">
        <div className="container flex justify-center laptop:bg-goldenrod-yellow w-11/12 p-12">
          <div className="flex justify-center laptop:bg-nd-blue p-8 w-11/12">
            <PdfViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
