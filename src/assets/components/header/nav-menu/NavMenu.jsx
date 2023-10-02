import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "../../buttons/NavBtn";
import DownloadPdf from "../../downloadPdf/DownloadPdf";
import Popup from "../../popup/Popup";

function NavMenu({ isNavOpen, handleClick }) {
  const [logoPosition, setLogoPosition] = useState({ top: 0 });
  const [isHoveringCV, setIsHoveringCV] = useState(false);

  const handleMouseEnterCV = () => {
    setIsHoveringCV(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringCV(false);
  };

  const handleLinkHover = (e) => {
    const linkPosition = e.target.getBoundingClientRect();
    const navHeight = e.target.getBoundingClientRect().height;
    setLogoPosition({
      top: linkPosition.top - navHeight,
    });
    console.log(linkPosition, navHeight);
  };

  const handleNavMouseLeave = () => {
    setLogoPosition({
      top: 0,
    });
  };

  return (
    <header className="p-card text-linkText flex flex-col justify-between w-full h-[100dvh] z-[9999] fixed bg-bodyCrl">
      <section className="flex items-start justify-between">
        <div className="relative flex flex-col gap-inner lg:flex-row">
          <div
            style={{ top: logoPosition.top }}
            className="relative hidden duration-300 ease-in-out lg:block"
          >
            Marked
          </div>
          <ul
            className="flex flex-col gap-2"
            onMouseLeave={handleNavMouseLeave}
          >
            <li>
              <NavLink
                onClick={handleClick}
                onMouseOver={handleLinkHover}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                onMouseOver={handleLinkHover}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                onMouseOver={handleLinkHover}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                onMouseOver={handleLinkHover}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavBtn isNavOpen={isNavOpen} handleClick={handleClick} />
      </section>
      <section className="flex flex-col gap-outer lg:flex-row lg:justify-between">
        <ul className="flex flex-wrap gap-outer">
          <li>
            <a href="https://www.instagram.com/marknovak1996/" target="_blank">
              Instagram
            </a>
          </li>
          {/* <li>
            <a href="#" target="_blank">LinkedIn</a>
          </li> */}
          <li>
            <a href="https://github.com/marked1996" target="_blank">
              Github
            </a>
          </li>
          <li
            onMouseEnter={handleMouseEnterCV}
            onMouseLeave={handleMouseLeave}
            className="relative z-[1000]"
          >
            {isHoveringCV && <Popup />}
            <DownloadPdf />
          </li>
        </ul>
        <a href="mailto:novakmark9@gmail.com">novakmark9@gmail.com</a>
      </section>
    </header>
  );
}

export default NavMenu;
