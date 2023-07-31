import React from "react";

const Popup = () => {
  return (
    <article
      className="z-[99999] w-72 rounded-radius py-2 px-4 bg-cardBgClr border 
    border-borderClr text-text absolute bottom-0 right-0 translate-x-[100%] -translate-y-[60%]"
    >
      <p>Oops sorry, the links are currently disabled.</p>
    </article>
  );
};

export default Popup;
