import React from "react";

const Popup = () => {
  return (
    <article
      className="z-[49] min-w-max rounded-radius py-2 px-4 bg-cardBgClr border 
    border-borderClr text-text absolute bottom-0 right-0 translate-x-[100%] -translate-y-[60%]"
    >
      <p>Oops sorry, the link is currently disabled.</p>
    </article>
  );
};

export default Popup;
