import React from "react";
import { useEffect } from "react";

//components
import Title from "../components/title/Title";
import ProjectCard from "../components/project-card/ProjectCard";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";

function AllProjects() {
  useEffect(() => {
    document.querySelector("#cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <div id="about" className="p-inner">
      <Title valueOne="My projects" valueTwo="Work" />
      <main id="cards" className=" flex flex-col gap-outer px-card pb-card">
        <section id="projects">
          <div className="grid grid-cols-1 gap-outer lg:grid-cols-2">
            <ProjectCard
              value="Stumble App"
              src="src\assets\images\stumble\stumble iphone.webp"
              projectId="/stumbleapp"
              alt="Stumble app open on an iphone laying on concrete"
            />
            <ProjectCard
              src="src\assets\images\setia\Setia-1.webp"
              projectId="/setia"
              value="Setia"
              alt="Setia project front card"
            />
            <ProjectCard
              value="NFT Jungle"
              src="src\assets\images\nftjungle\nftjungle.webp"
              projectId="/nftjungle"
              alt="Stumble app open on an iphone laying on concrete"
            />
            {/* <ProjectCard
              value="Title"
              src="src\assets\images\nftjungle\nftjungle.webp"
              projectId="/nftjungle"
              alt="Poolhouse Ljubljana project card"
            /> */}
          </div>
        </section>
        <h3 className="mb-[10svh] text-linkClr">
          Adding more projects soon...
        </h3>
        {/* <section id="view-all-projects">
          <ViewAllProjects />
        </section> */}
        <Cta href="/contact" />
        <Footer />
      </main>
    </div>
  );
}

export default AllProjects;
