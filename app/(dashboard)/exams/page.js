import React from "react";
import ExamsContainer from "@/components/ExamsContainer";

const examsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-3xl">Exercícios e Exames</h1>
      <ul className="menu menu-horizontal bg-base-200 mt-2 gap-20">
        <li>
          <a>Química</a>
        </li>
        <li>
          <a>Física</a>
        </li>
        <li>
          <a>Biologia</a>
        </li>
      </ul>
      <ExamsContainer />
    </div>
  );
};

export default examsPage;
