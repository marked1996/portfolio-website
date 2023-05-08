import React from "react";
import { useEffect } from "react";
//components
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/project-card/ProjectCard";

// setia images
import setiaPicOne from "../../images/setia/Setia-1.webp";
import setiaPicThree from "../../images/setia/Setia-3.webp";
import setiaPicFour from "../../images/setia/Setia-4.webp";
import setiaPicFive from "../../images/setia/Setia-5.webp";

//project card imgs
import nftPic from "../../images/nftjungle/nftjungle-1.webp";
import stumblePic from "../../images/stumble/stumble-iphone.webp";

function Setia() {
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
            <div className="card-content flex flex-col gap-outer">
              <h3>Setia Case Study</h3>
              <p className="text-linkClr">UI UX / Art direction</p>
            </div>
          </article>
          <article className="card basis-0 grow-[3]">
            <div className="card-content flex flex-col gap-inner">
              <p>
                Setia was a case study about a high end law firm.
                <br className="pb-4"></br>
                In order to effectively communicate the firm's values and appeal
                to its target audience, a serious approach was used in designing
                the overall look and feel of the project. The color scheme
                chosen for the project reflects this seriousness, with grayscale
                colors dominating the design (apart from the images). However, a
                bold and striking accent of teal blue was added to provide
                contrast and visual interest. This color choice was deliberate,
                as teal blue is often associated with trustworthiness and
                communication, two values that are essential in the legal
                profession.
              </p>
            </div>
          </article>
        </section>
        <section id="project-imgs">
          <div className="grid grid-cols-1 gap-outer md:grid-cols-2">
            <img
              src={setiaPicOne}
              className="md:col-span-2 grayscale hover:grayscale-0 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="Setia UI screens"
            />
            <img
              src={setiaPicThree}
              className="grayscale hover:grayscale-0 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="Setia laptop ui screen"
            />
            <img
              src={setiaPicFour}
              className=" rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="Setia logo buisness card"
            />

            <img
              src={setiaPicFive}
              className=" md:col-span-2 rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
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
              value="NFT Jungle"
              src={nftPic}
              projectId="/nftjungle"
              alt="NFT Jungle screens"
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

export default Setia;
