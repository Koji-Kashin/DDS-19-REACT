import React from "react";

const TemplateExpressions = () => {
  let nome = "Juninho Perdigoto";
  let aluno = {
    nome: "Miguelito Jorge",
    turma: "Progamção de IA",
    curso: "Informática Jr. 1",
  };
  console.log(aluno);
  return (
    <div>
        <h2>
            O melhor jogador de GetAmped é: {nome}
        </h2>
        <p>
            O nome do aluno é {aluno.nome}, faz o curso de {aluno.curso}, na turma {aluno.turma}
        </p>
    </div>
    );
};

export default TemplateExpressions;
