import React from "react";

function NavBtn({ isNavOpen, handleClick }) {
  return isNavOpen ? (
    <button
      className="hover:opacity-25 transition-opacity duration-300"
      onClick={handleClick}
    >
      Close
    </button>
  ) : (
    <button
      className="hover:opacity-25 transition-opacity duration-300"
      onClick={handleClick}
    >
      Menu
    </button>
  );
}

export default NavBtn;
