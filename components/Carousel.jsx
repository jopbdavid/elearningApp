"use client";
import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [slide, setSlide] = useState(1);
  return (
    <>
      <div className="carousel w-[80%] mt-12 ml-[10%] bg-neutral-200 rounded-3xl">
        {slide === 1 && (
          <div className="carousel-item relative w-full">
            <img
              src="./img/chemistry.png"
              alt=""
              className="w-32 h-32 ml-[10%] mt-6"
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <p className="text-secondary text-xl font-bold ml-[25%]">
                Domine a Química com tutorias detalhadas e suporte
                especializado. Aprenda os conceitos, faça experimentos virtuais
                e prepare-se para exames com confiança.
              </p>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="./img/relativity.png"
              alt=""
              className="w-32 h-32 ml-[10%] mt-6"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <p className="text-secondary text-xl font-bold ml-[25%]">
                Explore o fascinante mundo da Física. Entenda as leis que regem
                o universo através de lições interativas e abordagens práticas.
              </p>
            </div>
          </div>
        )}
        {slide === 3 && (
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="./img/bacteria.png"
              alt=""
              className="w-32 h-32 ml-[10%] mt-6"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <p className="text-secondary text-xl font-bold ml-[25%]">
                Maximize seu potencial nos exames. Com métodos de estudo
                eficazes e práticas de testes, ajudamos você a alcançar os
                melhores resultados.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button onClick={() => setSlide(1)} className="btn btn-m">
          1
        </button>
        <button onClick={() => setSlide(2)} className="btn btn-m">
          2
        </button>
        <button onClick={() => setSlide(3)} className="btn btn-m">
          3
        </button>
      </div>
    </>
  );
};

export default Carousel;
