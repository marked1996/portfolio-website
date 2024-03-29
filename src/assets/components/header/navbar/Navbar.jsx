import React from "react";
import NavBtn from "../../buttons/NavBtn";
import NavMenu from "../nav-menu/NavMenu";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function scrollToTopLogo() {
  window.scrollTo(0, 0);
}

function Navbar({ isNavOpen, handleClick }) {
  if (isNavOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
  }, [location.pathname]);

  if (isNavOpen) {
    return <NavMenu isNavOpen={isNavOpen} handleClick={handleClick} />;
  } else {
    return (
      <header className="flex justify-between p-card text-linkText fixed w-full z-50 bg-gradient-to-b from-test">
        <div className="flex gap-outer">
          <Link
            onClick={scrollToTopLogo}
            to="/"
            className="logo text-textClr hover:text-linkClr"
          >
            Marked
          </Link>
          <div className="pathname hidden lg:block text-linkClr">
            {location.pathname}
          </div>
        </div>
        <NavBtn isNavOpen={isNavOpen} handleClick={handleClick} />
      </header>
    );
  }
}

export default Navbar;
