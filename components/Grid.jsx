import React from "react";

const Grid = () => {
  return (
    <div>
      <h1 className="md:text-3xl text-xl font-medium mt-10 text-center">
        Porquê é que precisas de mim?
      </h1>
      <div className="grid gap-3 row-gap-3 w-full md:grid-cols-3 grid-row-3 mt-12 text-center">
        <div className="flex flex-col p-3 shadow-lg rounded-md">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/learn.png" alt="front end icon" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-md md:text-lg">
            Desenvolve competências e muito mais!
          </h4>
          <div className="flex flex-col text-sm mt-2">
            <p className="flex flex-row">
              Aprende a aprender, é um hábito que precisa de ser cultivado e que
              é essencial ao longo de toda a nossa vida. Errar é o melhor
              professor que podemos ter nesta jornada, aprende a abraçar esta
              oportunidade.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-3 shadow-lg rounded-md">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/habit.png" alt="back-end icon" />
          </div>
          <h4 className="mb-2 font-semibold leading-5 text-md md:text-lg text-gray-900">
            Estudo Acompanhado
          </h4>
          <div className="flex flex-col text-sm mt-2">
            <p className="flex flex-row">
              Mais que um tutor, um mentor. Vou estar ao teu lado a estudar
              contigo, a moldar o teu método. Acima de tudo, a partilhar a minha
              experiência para não pisares a poça onde eu já pisei!
            </p>
          </div>
        </div>
        <div className="flex flex-col p-3 shadow-lg rounded-md">
          <div className="w-16 h-16 mb-4 mx-auto">
            <img src="/img/atom.png" alt="database icon" />
          </div>

          <h4 className="mb-2 font-semibold leading-5 text-md md:text-lg text-gray-900">
            A ciência é uma maravilha.
          </h4>
          <div className="flex flex-col  text-sm mt-2">
            <p className="flex flex-row">
              É tudo menos um embarasso que tens de decorar. Ciência é vida é
              tudo o que nos rodeia. Eu vou-te mostrar como é possível te
              apaixonares por ela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
