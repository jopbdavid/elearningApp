"use client";
import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [slide, setSlide] = useState(1);
  return (
    <>
      <div className="carousel w-[80%] h-28 md:h-auto mt-12 ml-[10%] bg-neutral-200 rounded-3xl">
        {slide === 1 && (
          <div className="carousel-item relative w-full">
            <img
              src="./img/chemistry.png"
              alt=""
              className="md:w-32 md:h-32 w-16 h-16 ml-[10%] mt-6 md:mt-0"
            />
            <div>
              <h1 className="text-md md:text-2xl font-semibold font-mono">
                Química
              </h1>
              <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className="text-secondary text-[0.7em] md:text-lg font-bold ml-[25%] md:ml-[30%]">
                  A verdadeira magia do nosso mundo, a receita secreta da
                  cozinha do universo, onde os elementos se combinam de formas
                  fascinantes.
                </p>
              </div>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="./img/relativity.png"
              alt=""
              className="md:w-32 md:h-32 w-16 h-16 ml-[10%] mt-6 md:mt-0"
            />
            <h1 className="text-md md:text-2xl font-semibold font-mono">
              Física
            </h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <p className="text-secondary text-[0.7em] md:text-lg font-bold ml-[25%] md:ml-[30%]">
                A linguagem secreta do Universo. Porquê é que as bolas de
                futebol fazem curvas perfeitas? Porquê é que o teu telemóvel cai
                sempre com o ecrã virado para baixo?
              </p>
            </div>
          </div>
        )}
        {slide === 3 && (
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="./img/bacteria.png"
              alt=""
              className="md:w-32 md:h-32 w-16 h-16 ml-[10%] mt-6 md:mt-0"
            />
            <h1 className="text-md md:text-2xl font-semibold font-mono">
              Biologia/Geologia - Ciências Naturais
            </h1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <p className="text-secondary text-[0.7em] md:text-lg font-bold ml-[25%] md:ml-[30%]">
                Uma viagem selvagem pela selva que é a vida. Já te questionaste
                o que te faz ser... tu próprio?
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
