import React, { useState } from "react";
import { useEffect } from "react";

//components
import Title from "../components/title/Title";
import ProjectCard from "../components/project-card/ProjectCard";
import ViewAllProjects from "../components/viewAllProjects/ViewAllProjects";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";

//projects
import setiaPic from "../images/setia/Setia-3.webp";
import stumblePic from "../images/stumble/stumble-iphone.webp";
import nowaPic from "../images/nowa/iphone-3.webp";

import portretPic from "../images/robin.webp";

function About() {
  // const [marqueeSpeed, setMarqueeSpeed] = useState(70);

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

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");

  //   const handleMediaQueryChange = (event) => {
  //     setMarqueeSpeed(event.matches ? 30 : 70);
  //   };

  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <div id="about" className="p-inner">
      <Title valueOne="About me" valueTwo="Nice to meet you" />
      <main id="cards" className=" flex flex-col gap-outer px-card pb-card">
        <article className="card">
          <div className="card-content">
            <h3 className="">
              I'm a web designer and a front-end developer from Slovenia,
              passionate about creating memorable experiences packed with
              usability and character.
            </h3>
          </div>
        </article>
        <section
          id="about-intro"
          className=" flex flex-col lg:flex-row gap-outer"
        >
          <article className="card basis-0 grow-[3] rounded-radius lg:overflow-hidden">
            <div className="img-container lg:h-full lg:w-full">
              <img
                loading="lazy"
                className="object-cover w-full h-full rounded-radius"
                src={portretPic}
                alt="profile picture Marked"
              />
            </div>
          </article>
          <article className="card basis-0 grow-[2]">
            <div className="card-content flex flex-col gap-inner">
              <h3>About me</h3>
              <p>
                Welcome! I'm a dedicated web designer and a front-end developer.
                Being able to wear both hats gives me the ability to
                conceptualize design ideas and immediately test them against
                technical constraints. I can ask what if… and come up with real
                code to answer design explorations. It’s a two-way process that
                enhances my creativity.
              </p>
              <p>
                In my life I’m always striving for a balance between commercial
                work and personal projects. With personal projects, I allow
                myself to explore, fail, learn and, of course, have some fun.
                They contribute to my creative development and bring greater
                value to commercial projects.
              </p>
            </div>
          </article>
        </section>
        <section id="skills" className=" flex gap-outer flex-col lg:flex-row">
          <article className="card grow">
            <div className="card-content flex flex-col gap-outer">
              <h3>My tech stack</h3>
              <p className="text-linkClr">
                HTML CSS JS React NextJs Tailwind Wordpress Git
              </p>
            </div>
          </article>
          <article className="card grow">
            <div className="card-content flex flex-col gap-outer">
              <h3>Design technologies I use</h3>
              <p className="text-linkClr">
                Illustrator Photoshop Indesign AdobeXD Figma
              </p>
            </div>
          </article>
        </section>
        <section id="projects">
          <div className="grid grid-cols-1 gap-outer lg:grid-cols-2">
            <ProjectCard
              src={setiaPic}
              projectId="/setia"
              value="Setia"
              alt="Setia project front card"
            />
            <ProjectCard
              value="Stumble App"
              src={stumblePic}
              projectId="/stumbleapp"
              alt="Stumble app open on an iphone laying on concrete"
            />
            <ProjectCard
              value="Nowa Agency"
              src={nowaPic}
              projectId="/nowa"
              alt="Stumble app open on an iphone laying on concrete"
            />
          </div>
        </section>
        <section id="view-all-projects">
          <ViewAllProjects />
        </section>
        <Cta href="/contact" />
        <Footer />
      </main>
    </div>
  );
}

export default About;
