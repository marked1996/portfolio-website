import React from "react";
import Button from "../buttons/btn/Button";
import ctaImg from "../../images/robin.webp";

function Cta({ href }) {
  return (
    <article className="card">
      <div className="card-content flex flex-col items-center">
        <div className="container flex flex-col items-center gap-inner py-6">
          <h2 className="text-center">
            Let's create{" "}
            <span className=" hidden md:h-8 md:translate-y-[6px] lg:translate-y-[8px] lg:h-12 aspect-video object-cover md:inline-block lg:inline-block">
              <img
                src={ctaImg}
                className="grayscale rounded-md object-cover h-full w-full"
              />
            </span>{" "}
            something together.
          </h2>
          <Button value="Get in touch" href={href} className="ml-10 lg:ml-6" />
        </div>
      </div>
    </article>
  );
}

export default Cta;
