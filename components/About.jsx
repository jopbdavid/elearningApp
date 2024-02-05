import React from "react";
import Grid from "./Grid";

const About = () => {
  return (
    <div>
      <div className="avatar flex flex-row justify-center items-center -mt-6 md:-mt-20">
        <div className="md:w-52 w-32 md:rounded-full rounded-xl md:translate-y-24 translate-y-10">
          <img src="./img/about.JPG" className="md:w-16 md:h-16 w-10 h-10" />
        </div>
      </div>
      <div className="hero bg-accent w-2/3 mx-auto md:rounded-full rounded-2xl mt-6  ">
        <div className="hero-content text-center md:mt-16 flex-col">
          <div className="w-full ">
            <h1 className="md:text-3xl text-xl font-semibold">QUEM SOU EU?</h1>
            <div className="flex flex-row align-center justify-center w-64 align-middle border-2 rounded-xl border-neutral-300 mx-auto p-2">
              <img
                src="./img/location.png"
                alt="location"
                className="w-10 h-10 "
              />
              <span className="text-md md:text-2xl pt-2 pl-10 font-mono font-bold">
                Aveiro
              </span>
            </div>

            <p className="md:py-6 text-sm md:text-xl">
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
