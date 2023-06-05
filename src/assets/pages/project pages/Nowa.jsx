import React from "react";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/project-card/ProjectCard";
import Button from "../../components/buttons/btn/Button";

import nowalogo from "../../images/nowa/nowa-logo.webp";
import nowa1 from "../../images/nowa/iphone-1.webp";
import nowa2 from "../../images/nowa/iphone-2.webp";
import nowa3 from "../../images/nowa/iphone-3.webp";
import nowa4 from "../../images/nowa/macbook-1.webp";
import nowa5 from "../../images/nowa/macbook-2.webp";
import nowa6 from "../../images/nowa/macbook-3.webp";
import bussinesscard from "../../images/nowa/bussinesscard.webp";

import setiaPic from "../../images/setia/Setia-3.webp";
import stumblePic from "../../images/stumble/stumble-iphone.webp";

function Nowa() {
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
      <main
        id="cards"
        className=" flex flex-col gap-outer px-card pb-card pt-[40svh]"
      >
        <section
          id="about-intro"
          className=" flex flex-col lg:flex-row gap-outer"
        >
          <article className="card basis-0 grow-[2] rounded-radius lg:overflow-hidden">
            <div className="card-content flex flex-col justify-between gap-6 md:gap-0">
              <div className="flex flex-col gap-outer">
                <h3>Nowa Agency</h3>
                <p className="text-linkClr">
                  UI UX / Art direction / Development
                </p>
              </div>

              <Button
                href="https://nowa-lilac.vercel.app/"
                value="View live site"
                target="_blank"
              />
            </div>
          </article>
          <article className="card basis-0 grow-[3]">
            <div className="card-content flex flex-col gap-inner">
              <p>
                Nowa is a dynamic agency focused on sport events and sport
                promotion materials.
                <br className="pb-4"></br>
                The logo, positioned at an angle, symbolizes speed and movement,
                reflecting their energetic approach. Emphasizing a technical
                aesthetic, the brand conveys professionalism and precision,
                aligning with Nowa's values. The minimalist color palette of
                three hues serves as a blueprint, representing the agency's
                structured and strategic approach. By combining design and
                development expertise, Nowa stands out as a trusted partner in
                the world of sports.
              </p>
            </div>
          </article>
        </section>
        <section id="project-imgs">
          <div className="grid grid-cols-1 gap-outer md:grid-cols-2">
            <img
              src={nowa3}
              className="md:col-span-2 grayscale hover:grayscale-0 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="Setia UI screens"
            />
            <img
              src={nowa2}
              className="grayscale hover:grayscale-0 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="Setia laptop ui screen"
            />
            <img
              src={nowa1}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo buisness card"
            />

            <img
              src={nowa4}
              className=" md:col-span-2 rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo on matte black paper"
            />
            <img
              src={bussinesscard}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo on matte black paper"
            />
            <img
              src={nowa5}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo on matte black paper"
            />
            <img
              src={nowalogo}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo on matte black paper"
            />
            <img
              src={nowa6}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo on matte black paper"
            />
          </div>
        </section>
        <section id="view-all-projects">
          <h2 className="mt-[20svh]">Other projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-outer">
            <ProjectCard
              value="Stumble Mobile App"
              src={stumblePic}
              projectId="/stumbleapp"
              alt="Stumble app open on an iphone laying on concrete"
            />
            <ProjectCard
              value="Setia"
              src={setiaPic}
              projectId="/setia"
              alt="setia project image"
            />
            <h3 className="mb-[10svh] text-linkClr">
              Adding more projects soon...
            </h3>
          </div>

          {/* <ViewAllProjects /> */}
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Nowa;
