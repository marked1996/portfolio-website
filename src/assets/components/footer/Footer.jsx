import React from "react";

function Footer() {
  return (
    <article id="footer" className="card footer">
      <div className="card-content flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="left-side flex flex-col gap-8 md:gap-16 pb-2 md:pb-0">
          <a href="mailto:novakmark9@gmail.com">marked@gmail.com</a>
          <div className="social-media flex gap-outer">
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
