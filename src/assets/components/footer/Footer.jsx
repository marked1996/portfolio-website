import React from "react";
import DownloadPdf from "../downloadPdf/DownloadPdf";
import Popup from "../popup/Popup";
import { useState } from "react";

function Footer() {
  const [isHoveringIg, setIsHoveringIg] = useState(false);
  const [isHoveringGh, setIsHoveringGh] = useState(false);
  const [isHoveringCV, setIsHoveringCV] = useState(false);

  const handleMouseEnterIg = () => {
    setIsHoveringIg(true);
  };

  const handleMouseEnterGh = () => {
    setIsHoveringGh(true);
  };
  const handleMouseEnterCV = () => {
    setIsHoveringCV(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringIg(false);
    setIsHoveringGh(false);
    setIsHoveringCV(false);
  };

  return (
    <article id="footer" className="card footer">
      <div className="card-content flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="left-side flex flex-col gap-8 md:gap-16 pb-2 md:pb-0">
          <a href="mailto:novakmark9@gmail.com">dummymail@dummymail.com</a>
          <div className="social-media flex gap-outer">
            <span
              onMouseEnter={handleMouseEnterIg}
              onMouseLeave={handleMouseLeave}
              className="relative  z-[1000]"
            >
              {isHoveringIg && <Popup />}
              <a
                href="https://www.instagram.com/marknovak1996/"
                // target="_blank"
              >
                Instagram
              </a>
            </span>
            <span
              onMouseEnter={handleMouseEnterGh}
              onMouseLeave={handleMouseLeave}
              className="relative  z-[1000]"
            >
              {isHoveringGh && <Popup />}
              <a
                href="https://github.com/marked1996"
                // target="_blank"
              >
                Github
              </a>
            </span>
            <span
              onMouseEnter={handleMouseEnterCV}
              onMouseLeave={handleMouseLeave}
              className="relative   z-[1000]"
            >
              {isHoveringCV && <Popup />}
              <DownloadPdf />
            </span>

            {/* <span>
              <a href="#" target="_blank">
                LinkedIn
              </a>
            </span> */}
          </div>
        </div>
        <div className="right-side">
          <p className="text-linkClr">Designed and developed by Marked ©2023</p>
        </div>
      </div>
    </article>
  );
}

export default Footer;
