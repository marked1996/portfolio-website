import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewAllProjects() {
  const [marqueeSpeed, setMarqueeSpeed] = useState(70);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (event) => {
      setMarqueeSpeed(event.matches ? 30 : 60);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const links = [
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
    "View all projects",
  ];

  return (
    <article className="card projects">
      <div className="card-content projects-content view-all-projects-card">
        <Marquee
          className="projects-marquee"
          speed={marqueeSpeed}
          gradientColor={[14, 14, 14]}
          gradientWidth={0}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to="/projects"
              className="mr-4 lg:mr-6 text-linkText"
            >
              {link}
            </Link>
          ))}
        </Marquee>
      </div>
    </article>
  );
}

export default ViewAllProjects;
