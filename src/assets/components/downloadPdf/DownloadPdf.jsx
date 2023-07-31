import React from "react";
import downloadPdf from "../../../../public/CV.pdf";

const DownloadPdf = () => {
  return (
    <span>
      <a href={downloadPdf} download>
        Download CV
      </a>
    </span>
  );
};

export default DownloadPdf;
