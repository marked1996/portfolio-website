import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ value, src, alt, projectId }) {
  return (
    <Link to={projectId}>
      <article
        className="card group rounded-radius  hover:cursor-pointer opacity-70 hover:opacity-100 
      transition duration-300 ease-in-out relative h-full grayscale hover:grayscale-0"
      >
        <div className="img-container  h-full w-full bg-cover overflow-hidden rounded-radius">
          <img
            loading="lazy"
            className="group-hover:scale-105 transition duration-300 ease-in-out object-cover h-full w-full"
            src={src}
            alt={alt}
          />
        </div>

        <div className="project-card-text flex items-center gap-1  absolute z-6 bottom-2 left-2 lg:bottom-4 lg:left-4">
          <p className="text-textClr opacity-80 group-hover:opacity-100 transition duration-300 ease-in-out">
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
