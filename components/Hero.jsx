import React from "react";
import Link from "next/link";
import Image from "next/image";
import Remote from "./Remote";

const Hero = () => {
  return (
    <>
      <h1 className="text-4xl text-center bg-neutral-300 pt-2">
        DESCOBRE A MARAVILHA QUE É<span className="text-primary"> CIÊNCIA</span>
      </h1>
      <div className="hero bg-neutral-300">
        <div className=" flex z-0 w-full align-middle flex-col lg:flex-row">
          <div className="flex flex-row w-full">
            <div className="w-1/3 ml-6">
              <div className="flex flex-row my-6">
                <Image src="/img/level.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-xl">Aprende ao teu ritmo</p>
              </div>
              <div className="flex flex-row align-center my-6">
                <Image src="/img/apply.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-xl">Pratica com casos reais</p>
              </div>
              <div className="flex flex-row align-center my-6">
                <Image src="/img/success.png" width={50} height={50} />
                <p className="pl-10 pt-3 text-xl">
                  Desenvolve os pilares para uma carreira científica
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
