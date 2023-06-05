import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
import classNames from "classnames";

function Button({ value, href, className, target }) {
  const buttonClass = classNames("btn text-linkText", className);

  return (
    <Link target={target} to={href} className="btn-link flex items-center">
      <button className={buttonClass}>{value}</button>
      <svg
        id="svg-container"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        width="28.586"
        height="25.964"
        viewBox="0 0 28.586 25.964"
      >
        <g id="svg-item" data-name="Layer 1">
          <polygon
            points="15.604 0 13.13 2.475 23.637 12.981 13.13 23.489 15.604 25.964 28.586 12.981 15.604 0"
            fill="#f7f7f7"
          />
          <rect y="11.231" width="26.111" height="3.5" fill="#f7f7f7" />
        </g>
      </svg>
    </Link>
  );
}

export default Button;
