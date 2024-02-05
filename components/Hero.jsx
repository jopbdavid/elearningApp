import React from "react";
import Link from "next/link";
import Image from "next/image";
import Remote from "./Remote";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl text-center bg-neutral-300 pt-2">
        DESCOBRE A MARAVILHA QUE É<span className="text-primary"> CIÊNCIA</span>
      </h1>
      <Carousel />

      <div className="hero bg-neutral-300">
        <div className=" flex z-0 w-full align-middle flex-col lg:flex-row">
          <div className="flex flex-col md:flex-row w-full align-middle justify-center">
            <div className="w-10/12 md:w-1/3 ml-12 md:ml-12 md:my-auto bg-slate-400 rounded-xl p-2 mt-4">
              <div className="flex flex-row my-6">
                {/* <Image src="/img/level.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl">
                  Aprende ao teu ritmo
                </p> */}
                <Image src="/img/degree.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl lg:text-2xl font-semibold tracking-[0.2em]">
                  7º - 12º
                </p>
              </div>
              <div className="flex flex-row align-center my-6">
                {/* <Image src="/img/apply.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl">
                  Pratica com casos reais
                </p> */}
                <Image src="/img/schedule.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl lg:text-2xl font-semibold tracking-[0.2em]">
                  Horários Flexíveis
                </p>
              </div>
              <div className="flex flex-row align-center my-6">
                {/* <Image src="/img/success.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl">
                  Desenvolve os pilares para uma carreira científica
                </p> */}
                <Image src="/img/free.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-md md:text-xl lg:text-2xl font-semibold tracking-[0.2em]">
                  1º Aula Grátis
                </p>
              </div>
            </div>
            <Remote />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
