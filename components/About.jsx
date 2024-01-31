import React from "react";
import Grid from "./Grid";

const About = () => {
  return (
    <div>
      <div className="avatar flex flex-row justify-center items-center">
        <div className="w-52 rounded-full translate-y-20">
          <img src="./img/about.jpg" className="w-16 h-16" />
        </div>
      </div>
      <div className="hero bg-accent w-2/3 mx-auto rounded-full -mt-16 ">
        <div className="hero-content text-center mt-32 flex-col">
          <div className="max-w-md ">
            <h1 className="text-3xl font-semibold">QUEM SOU EU?</h1>
            <p className="py-6">
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
