import React from "react";
import { useEffect } from "react";
//components
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/project-card/ProjectCard";

// project images
import nftPicOne from "../../images/nftjungle/nftjungle-1.webp";
import nftPicTwo from "../../images/nftjungle/nftjungle-2.webp";
import nftPicThree from "../../images/nftjungle/nftjungle-3.webp";
import nftPicFour from "../../images/nftjungle/nftjungle-4.webp";
import nftPicFive from "../../images/nftjungle/nftjungle-5.webp";
import nftPicSeven from "../../images/nftjungle/nftjungle-7.webp";
import nftGif from "../../images/nftjungle/nftjunglegif.gif";

//project card img
import setiaPic from "../../images/setia/Setia-3.webp";
import stumblePic from "../../images/stumble/stumble-iphone.webp";
import nowaPic from "../../images/nowa/iphone-3.webp";

function NftZoo() {
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
              <h3>NFT Jungle</h3>
              <p className="text-linkClr">
                Case study / UI UX / Development / Art direction
              </p>
            </div>
          </article>
          <article className="card basis-0 grow-[3]">
            <div className="card-content flex flex-col gap-inner">
              <p>
                NFT Jungle was a web3 project that was initially conceptualized
                as a school project by four friends - me, Tine, Lea and
                Veronika. The project was an exciting way for us to learn,
                experiment, and have fun while exploring the possibilities of
                the web3 ecosystem..
                <br></br>
                Starting with just giraffes, we added more animal NFTs as the
                project grew. To embody the spirit of the project, I designed
                and developed a friendly and straightforward landing page, which
                reflected fun, happiness, and experimentation. NFT Jungle is not
                just a collection of NFTs but a reflection of our passion for
                exploration and learning in the exciting world of Web3.
              </p>
            </div>
          </article>
        </section>
        <section id="project-imgs">
          <div className="grid grid-cols-1 gap-outer md:grid-cols-2">
            <img
              src={nftPicSeven}
              className="md:col-span-2 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="NFT Jungle UI screens"
            />
            <img
              src={nftPicOne}
              className="md:col-span-2 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="NFT Jungle UI screens"
            />
            <img
              src={nftGif}
              className=" rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="NFT giraffes and crocodiles gif looping"
            />
            <img
              src={nftPicFive}
              className=" rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="tshirt nft jungle"
            />

            <img
              src={nftPicTwo}
              className=" md:col-span-2 rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out  object-cover h-full w-full"
              alt="nft jungle screen"
            />
            <img
              src={nftPicThree}
              className=" rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
              alt="nft jungle screen"
            />
            <img
              src={nftPicFour}
              className="rounded-radius opacity-70 hover:opacity-100 transition duration-500 ease-in-out object-cover h-full w-full"
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
              value="Stumble Mobile App"
              src={stumblePic}
              projectId="/stumbleapp"
              alt="Stumble app open on an iphone laying on concrete"
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

export default NftZoo;
