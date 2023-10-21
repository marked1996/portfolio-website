import React from "react";
import { useEffect } from "react";
import novartis1 from "../../images/novartis/novartis-1.webp";
import novartis2 from "../../images/novartis/novartis-2.webp";
import novartis3 from "../../images/novartis/novartis-3.webp";
import novartis4 from "../../images/novartis/novartis-4.webp";
import novartis5 from "../../images/novartis/novartis-5.webp";

import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/project-card/ProjectCard";

import setiaPic from "../../images/setia/Setia-3.webp";
import nftPic from "../../images/nftjungle/nftjungle-1.webp";
import nowaPic from "../../images/nowa/iphone-3.webp";

const Novartis = () => {
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
          className="flex flex-col lg:flex-row gap-outer"
        >
          <article className="card basis-0 grow-[2] rounded-radius lg:overflow-hidden">
            <div className="flex flex-col card-content gap-outer">
              <h3>Novartis career fair</h3>
              <p className="text-linkClr">UI UX</p>
            </div>
          </article>
          <article className="card basis-0 grow-[3]">
            <div className="flex flex-col card-content gap-inner">
              <p>
                My task was to design the Novartis career website, aligning it
                with their existing design system and well-defined brand
                identity.
                <br></br>
                This involved seamlessly integrating their colors, typography,
                and design principles to create a modern, user-friendly platform
                that reflects Novartis' commitment to healthcare innovation and
                excellence. The result is a career website that attracts top
                talent and reinforces Novartis' industry leadership.
              </p>
            </div>
          </article>
        </section>
        <section id="project-imgs">
          <div className="grid grid-cols-1 gap-outer md:grid-cols-2">
            <img
              loading="lazy"
              src={novartis5}
              className="object-cover w-full h-full transition duration-500 ease-in-out md:col-span-2 rounded-radius opacity-70 hover:opacity-100"
              alt="NFT Jungle UI screens"
            />
            <img
              loading="lazy"
              src={novartis2}
              className="object-cover w-full h-full transition duration-500 ease-in-out md:col-span-2 rounded-radius opacity-70 hover:opacity-100"
              alt="NFT Jungle UI screens"
            />
            <img
              loading="lazy"
              src={novartis1}
              className="object-cover w-full h-full transition duration-500 ease-in-out rounded-radius opacity-70 hover:opacity-100"
              alt="NFT giraffes and crocodiles gif looping"
            />
            <img
              loading="lazy"
              src={novartis4}
              className="object-cover w-full h-full transition duration-500 ease-in-out rounded-radius opacity-70 hover:opacity-100"
              alt="tshirt nft jungle"
            />

            <img
              loading="lazy"
              src={novartis3}
              className="object-cover w-full h-full transition duration-500 ease-in-out md:col-span-2 rounded-radius opacity-70 hover:opacity-100"
              alt="nft jungle screen"
            />
          </div>
        </section>
        <section id="view-all-projects">
          <h2 className="mt-[20svh] mb-2 md:mb-4">Other projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-outer">
            <ProjectCard
              value="Setia"
              src={setiaPic}
              projectId="/setia"
              alt="Poolhouse Setia project card"
            />
            <ProjectCard
              value="Nowa agency"
              src={nowaPic}
              projectId="/nowa"
              alt="Nowa agency phone mockup"
            />
            <ProjectCard
              value="NFT Jungle"
              src={nftPic}
              projectId="/nftjungle"
              alt="Nft jungle presentation picture"
            />
          </div>
          <h3 className="mb-[10svh] text-linkClr">
            Adding more projects soon...
          </h3>

          {/* <ViewAllProjects /> */}
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Novartis;
