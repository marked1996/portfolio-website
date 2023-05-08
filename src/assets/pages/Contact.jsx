import React from "react";
import { useEffect } from "react";

//components
import Title from "../components/title/Title";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";

function Contact() {
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
      <Title valueOne="Don't be shy" valueTwo="Get in touch" />
      <main id="cards" className=" flex flex-col gap-outer px-card pb-card">
        <Cta href="mailto:novakmark9@gmail.com" />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
