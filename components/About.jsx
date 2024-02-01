import React from "react";
import Grid from "./Grid";

const About = () => {
  return (
    <div>
      <div className="avatar flex flex-row justify-center items-center">
        <div className="md:w-52 w-32 md:rounded-full rounded-xl md:translate-y-20 translate-y-10">
          <img src="./img/about.jpg" className="md:w-16 md:h-16 w-10 h-10" />
        </div>
      </div>
      <div className="hero bg-accent w-2/3 mx-auto md:rounded-full rounded-2xl mt-6 md:-mt-16 ">
        <div className="hero-content text-center md:mt-32 flex-col">
          <div className="max-w-md ">
            <h1 className="md:text-3xl text-xl font-semibold">QUEM SOU EU?</h1>
            <p className="md:py-6 text-sm md:text-md">
              Com vastos conhecimentos na área da Bioquímica, nutrição e
              Engenharia Industrial. Experiência técnica aplicada ao contexto
              industrial, para colmatar uma das grandes lacunas do sistema de
              ensino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
