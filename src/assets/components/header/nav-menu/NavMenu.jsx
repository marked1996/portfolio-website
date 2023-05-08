import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "../../buttons/NavBtn";
import { useState } from "react";

function NavMenu({ isNavOpen, handleClick }) {
  const [logoPosition, setLogoPosition] = useState({ top: 0 });

  const handleLinkHover = (e) => {
    const linkPosition = e.target.getBoundingClientRect();
    const navHeight = e.currentTarget.getBoundingClientRect().height;
    setLogoPosition({
      top: linkPosition.top - navHeight,
    });
  };

  const handleNavMouseLeave = () => {
    setLogoPosition({
      top: 0,
    });
  };

  // useEffect(() => {
  //   console.log(logoPosition);
  // }, [logoPosition]);

  return (
    <header className="p-card text-linkText flex flex-col justify-between w-full h-fullScreen z-50 fixed bg-bodyCrl">
      <section className="flex justify-between items-start">
        <div className="flex flex-col gap-inner lg:flex-row relative">
          <div
            style={{ top: logoPosition.top }}
            className="hidden lg:block relative ease-in-out duration-300"
          >
            Marked
          </div>
          <ul
            className="flex flex-col gap-2"
            onMouseLeave={handleNavMouseLeave}
          >
            <li onClick={handleClick} onMouseOver={handleLinkHover}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleClick} onMouseOver={handleLinkHover}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={handleClick} onMouseOver={handleLinkHover}>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li onClick={handleClick} onMouseOver={handleLinkHover}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <NavBtn isNavOpen={isNavOpen} handleClick={handleClick} />
      </section>
      <section className="flex flex-col gap-outer  lg:flex-row lg:justify-between">
        <ul className="flex gap-outer flex-wrap">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        <a href="mailto:novakmark9@gmail.com">novakmark9@gmail.com</a>
      </section>
    </header>
  );
}

export default NavMenu;
