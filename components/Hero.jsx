import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-accent">
      <div className="hero-content flex-col lg:flex-row">
        <img src="./img/science.jpg" className="max-w-xs rounded-lg -ml-64" />
        <div>
          <h1 className="text-4xl">
            DESCOBRE A MARAVILHA QUE É
            <span className="text-primary"> CIÊNCIA</span>
          </h1>

          <div className="flex flex-row align-center my-6">
            <Image src="/img/level.png" width={50} height={50} />
            <p className="pl-6 pt-3 text-2xl">Aprende ao teu ritmo</p>
          </div>
          <div className="flex flex-row align-center my-6">
            <Image src="/img/apply.png" width={50} height={50} />
            <p className="pl-6 pt-3 text-2xl">Pratica com casos reais</p>
          </div>
          <div className="flex flex-row align-center my-6">
            <Image src="/img/success.png" width={50} height={50} />
            <p className="pl-6 pt-3 text-2xl">
              Desenvolve os pilares para uma carreira científica
            </p>
          </div>

          {/* <Link href="/news" className="btn btn-primary w-[50%] ml-56">
            Regista-te aqui!
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
