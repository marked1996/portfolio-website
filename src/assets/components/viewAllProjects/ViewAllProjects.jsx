import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function ViewAllProjects() {
  return (
    <article className="card projects">
      <div className="card-content projects-content">
        <Marquee
          className="projects-marquee"
          speed={100}
          gradientColor={[14, 14, 14]}
          gradientWidth={0}
        >
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
          <Link to="/projects" className="mr-2 lg:mr-4">
            View all projects
          </Link>
        </Marquee>
      </div>
    </article>
  );
}

export default ViewAllProjects;
