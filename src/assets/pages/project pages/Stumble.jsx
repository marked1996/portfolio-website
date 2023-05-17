import React from "react";
import { useEffect } from "react";
//components
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/project-card/ProjectCard";

//images
import stumblePicOne from "../../images/stumble/stumble-iphone.webp";
// import stumblePicTwo from "../../images/stumble/stumble-2.webp";
import stumblePicThree from "../../images/stumble/stumble-3.webp";
import stumblePicFour from "../../images/stumble/stumble-4.webp";
import stumblePicFive from "../../images/stumble/stumble-5.webp";
import stumblePicSix from "../../images/stumble/stumble-6.webp";

//project images
import nftPic from "../../images/nftjungle/nftjungle-1.webp";
import setiaPic from "../../images/setia/Setia-3.webp";

function Stumble() {
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
              <h3>Stumble App</h3>
              <p className="text-linkClr">UI UX / Illustration / Flow</p>
            </div>
          </article>
          <article className="card basis-0 grow-[3]">
            <div className="card-content flex flex-col gap-inner">
              <p>
                Travel is more than just reaching a destination - it's about the
                entire experience, from planning and anticipation to the actual
                journey itself. And yet, so often, the process of planning and
                booking can feel like a chore. But it doesn't have to be that
                way. <br></br>Stumble is a case study designed to make the
                travel planning process exciting and enjoyable. With Stumble,
                you can discover new and unique destinations, get personalized
                recommendations, and easily book your travel all in one place.
                It strives to create a seamless and stress-free way to turn the
                planning process into an adventure of its own. So, don't just
                wait for your next trip to begin at the airport - let Stumble
                take you on a journey from the very start..
              </p>
            </div>
          </article>
        </section>
        <section id="project-imgs">
          <div className="grid grid-cols-1 gap-outer lg:grid-cols-2">
            <img
              src={stumblePicSix}
              className=" col-span-1 md:col-span-2 rounded-radius opacity-60 hover:opacity-80 transition duration-500 ease-in-out bg-cover h-full w-full"
              alt="Stumble components"
            />
            <img
              src={stumblePicFive}
              className="col-span-1 grayscale hover:grayscale-0 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover w-full"
              alt="Stumble cover photo"
            />

            <img
              src={stumblePicFour}
              className="col-span-1 rounded-radius grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500 ease-in-out h-full w-full"
              alt="Stumble home screen"
            />
            <img
              src={stumblePicThree}
              className="col-span-1 md:col-span-2 rounded-radius opacity-60 hover:opacity-80 transition duration-500 ease-in-out bg-cover h-full w-full"
              alt="6 Stumble screens open on an iphone"
            />
            <img
              src={stumblePicOne}
              className="col-span-1 md:col-span-2 rounded-radius opacity-60 hover:opacity-80 transition duration-500 ease-in-out bg-cover h-full w-full"
              alt="6 Stumble screens open on an iphone"
            />
          </div>
        </section>
        <section id="view-all-projects">
          <h2 className="mt-[20svh]">Other projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-outer">
            <ProjectCard
              value="NFT Jungle"
              src={nftPic}
              projectId="/nftjungle"
              alt="Stumble app open on an iphone laying on concrete"
            />
            <ProjectCard
              value="Setia"
              src={setiaPic}
              projectId="/setia"
              alt="Poolhouse Setia project card"
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
}

export default Stumble;
