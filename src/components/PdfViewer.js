// import React, { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import resume from "../assets/najTech.pdf";

// const PdfViewer = () => {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="w-11/12 p-12 laptop:bg-golden-poppy flex justify-center object-fill">
//       <Document
//         className="laptop:object-contain object-scale-down"
//         file={resume}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         {Array.from(new Array(numPages), (el, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//     </div>
//   );
// };

// export default PdfViewer;
