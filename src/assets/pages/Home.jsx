import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//components
import Button from "../components/buttons/btn/Button";
import Title from "../components/title/Title";
import ProjectCard from "../components/project-card/ProjectCard";
import ViewAllProjects from "../components/viewAllProjects/ViewAllProjects";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";

//ticker
import tickerOne from "../images/ticker/ticker-1.webp";
import tickerTwo from "../images/ticker/ticker-2.webp";
import tickerThree from "../images/ticker/ticker-3.webp";
import tickerFour from "../images/ticker/ticker-4.webp";
import tickerFive from "../images/ticker/ticker-5.webp";
import tickerSeven from "../images/ticker/ticker-7.webp";

//projects
import stumblePic from "../images/stumble/stumble-iphone.webp";
import setiaProjectPic from "../images/setia/Setia-1.webp";

//portret
import portretPic from "../images/mark-portret.webp";

function Home() {
  const [marqueeSpeed, setMarqueeSpeed] = useState(70);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (event) => {
      setMarqueeSpeed(event.matches ? 30 : 70);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // const slidingImgs = useRef();

  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const imgs = self.selector(".img-container");
  //     imgs.forEach((img) => {
  //       gsap.to(img, {
  //         x: -500,
  //         scrollTrigger: {
  //           overwrite: "auto",
  //           trigger: img,
  //           start: "top bottom",
  //           end: "80% 0%",
  //           scrub: true,
  //           stagger: true,
  //         },
  //       });
  //     });
  //   }, slidingImgs); // <- Scope!
  //   return () => ctx.revert(); // <- Cleanup!
  // }, []);

  return (
    <div id="home" className="p-inner">
      <Title valueOne="Product Designer" valueTwo="Front End Developer" />
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
        <div className="ticker-marquee-wrapper">
          <Marquee
            gradientColor={[14, 14, 14]}
            gradientWidth={100}
            speed={marqueeSpeed}
          >
            <section
              id="banner"
              className="flex gap-outer  h-32  md:h-52  lg:h-64  xl:h-80"
            >
              <div className="img-container bg-cover rounded-radius h-full overflow-hidden">
                <img
                  src={tickerOne}
                  alt="project img"
                  className="w-full h-full rounded-radius opacity-70 object-cover"
                />
              </div>

              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerTwo}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerThree}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full  bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerFour}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerFive}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerSeven}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container bg-cover rounded-radius h-full overflow-hidden">
                <img
                  src={tickerOne}
                  alt="project img"
                  className="w-full h-full rounded-radius opacity-70 object-cover"
                />
              </div>

              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerTwo}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerThree}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full  bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerFour}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius gopacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerFive}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
              <div className="img-container h-full bg-cover rounded-radius overflow-hidden">
                <img
                  src={tickerSeven}
                  alt="project img"
                  className="w-full h-full bg-cover rounded-radius opacity-70 object-cover"
                />
              </div>
            </section>
          </Marquee>
        </div>

        <section id="intro" className=" flex flex-col lg:flex-row gap-outer ">
          <article className="card basis-0 grow-[3]">
            <div className="card-content flex flex-col gap-inner">
              <h3>A quick intro</h3>
              <p>
                With a passion for technology and a focus on web, I strive to
                create beautiful digital experiences that drive value for my
                clients and their customers. I believe in taking a collaborative
                approach to my work and I work closely with my clients to ensure
                that every project meets their unique needs and exceeds their
                expectations.
              </p>
              <Button value="Read more" href="/about" />
            </div>
          </article>
          <article className="card basis-0 grow rounded-radius overflow-hidden hidden lg:block bg-cover">
            <img
              className="object-cover w-full h-full"
              src={portretPic}
              alt="profile picture Marked"
            />
          </article>
        </section>
        <section id="skills" className=" flex gap-outer flex-col lg:flex-row">
          <article className="card grow">
            <div className="card-content flex flex-col gap-outer">
              <h3>My tech stack</h3>

              <p className="text-linkClr">
                HTML CSS Javascript React Tailwind Wordpress Git (currently
                tackling Nextjs and TS)
              </p>
            </div>
          </article>
          <article className="card grow">
            <div className="card-content flex flex-col gap-outer">
              <h3>Design technologies I use</h3>
              <p className="text-linkClr">
                Illustrator Photoshop Indesign Aftereffects Lightroom AdobeXD
                Figma
              </p>
            </div>
          </article>
        </section>
        <section id="projects">
          <div className="grid grid-cols-1 gap-outer lg:grid-cols-2">
            {/* <ProjectCard
              value="Poolhouse Ljubljana"
              src="src\assets\images\poolhouse\poolhouselogo.webp"
              projectId="/poolhouseljubljana"
              alt="Poolhouse Ljubljana project card"
            /> */}{" "}
            <ProjectCard
              src={setiaProjectPic}
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
            {/* <ProjectCard
              src="src\assets\images\nftjungle\nftjungle.webp"
              projectId="/nftjungle"
              value="NFT Jungle"
              alt="Nft Jungle project front card"
            /> */}
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

export default Home;
