import React from "react";
import Marquee from "react-fast-marquee";

function Title({ valueOne, valueTwo }) {
  return (
    <section id="title" className="pt-[50svh]">
      <Marquee
        gradientColor={[7, 7, 7]}
        gradientWidth={100}
        speed={100}
        className="flex"
      >
        <h1>{valueOne}</h1>
        <h1>{valueTwo}</h1>
        <h1>{valueOne}</h1>
        <h1>{valueTwo}</h1>
        <h1>{valueOne}</h1>
        <h1>{valueTwo}</h1>
        <h1>{valueOne}</h1>
        <h1>{valueTwo}</h1>
        <h1>{valueOne}</h1>
        <h1>{valueTwo}</h1>
      </Marquee>
    </section>
  );
}

export default Title;
