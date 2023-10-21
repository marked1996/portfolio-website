import React from "react";
import DownloadPdf from "../downloadPdf/DownloadPdf";
import Popup from "../popup/Popup";
import { useState } from "react";

function Footer() {
  // const [isHoveringIg, setIsHoveringIg] = useState(false);
  // const [isHoveringGh, setIsHoveringGh] = useState(false);
  const [isHoveringCV, setIsHoveringCV] = useState(false);

  // const handleMouseEnterIg = () => {
  //   setIsHoveringIg(true);
  // };

  // const handleMouseEnterGh = () => {
  //   setIsHoveringGh(true);
  // };
  const handleMouseEnterCV = () => {
    setIsHoveringCV(true);
  };

  const handleMouseLeave = () => {
    // setIsHoveringIg(false);
    // setIsHoveringGh(false);
    setIsHoveringCV(false);
  };

  return (
    <article id="footer" className="card footer">
      <div className="flex flex-col card-content md:flex-row md:justify-between md:items-end">
        <div className="flex flex-col gap-8 pb-2 left-side md:gap-16 md:pb-0">
          <a href="mailto:novakmark9@gmail.com">novakmark9@gmail.com</a>
          <div className="flex social-media gap-outer">
            <span>
              <a
                href="https://www.instagram.com/marknovak1996/"
                target="_blank"
              >
                Instagram
              </a>
            </span>
            <span>
              <a href="https://github.com/marked1996" target="_blank">
                Github
              </a>
            </span>
            <span
              onMouseEnter={handleMouseEnterCV}
              onMouseLeave={handleMouseLeave}
              className="relative   z-[999]"
            >
              {isHoveringCV && <Popup />}
              <DownloadPdf />
            </span>

            {/* <span>
              <a
                href="https://www.linkedin.com/in/mark-novak-102223278/"
                target="_blank"
              >
                LinkedIn
              </a>
            </span> */}
          </div>
        </div>
        <div className="right-side">
          <p className="text-linkClr">
            Designed and developed by Marked ©{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Footer;
