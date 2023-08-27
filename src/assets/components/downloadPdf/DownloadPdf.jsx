import React from "react";
import downloadPdf from "../../images/Cv.pdf";

const DownloadPdf = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
  };
  return (
    <span>
      <a
        onClick={handleLinkClick}
        href={downloadPdf}
        download
        className="pointer-events-none"
      >
        Download CV
      </a>
    </span>
  );
};

export default DownloadPdf;
