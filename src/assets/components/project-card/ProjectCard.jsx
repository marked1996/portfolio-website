import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ value, src, alt, projectId }) {
  return (
    <Link to={projectId}>
      <article className="relative h-full overflow-hidden card group rounded-radius hover:cursor-pointer">
        <div className="w-full h-full overflow-hidden transition duration-300 ease-in-out bg-cover img-container rounded-radius opacity-70 group-hover:opacity-100">
          {/* <div className="absolute z-10 w-full h-full bg-gradient-to-t gradient-33 from-cardBgClr"></div> */}
          <img
            loading="lazy"
            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-105"
            src={src}
            alt={alt}
          />
        </div>

        <div className="absolute flex items-center gap-1 project-card-text z-6 bottom-2 left-2 lg:bottom-4 lg:left-4">
          <p className="transition duration-300 ease-in-out text-linkText text-textClr opacity-80 group-hover:opacity-100">
            {value}
          </p>
          <svg
            id="project-svg"
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-[6px] transition duration-300 ease-in-out"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            width="28.586"
            height="25.964"
            viewBox="0 0 28.586 25.964"
          >
            <g id="project-svg-item" data-name="Layer 1">
              <polygon
                points="15.604 0 13.13 2.475 23.637 12.981 13.13 23.489 15.604 25.964 28.586 12.981 15.604 0"
                fill="#f7f7f7"
              />
              <rect y="11.231" width="26.111" height="3.5" fill="#f7f7f7" />
            </g>
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
