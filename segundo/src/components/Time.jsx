import React from "react";

const Time = ({ nome, estado, posicao, campeao }) => {
  return (
    <div>
      <h1>Nome do time {nome}</h1>
      <h2>Fica pertence ao Estado do {estado}</h2>
      <h2>Está na posição {posicao} do campeonato</h2>
      {(campeao && <h3>Este time é muito campeão</h3>) || (
        <h3>Este time não é campeão</h3>
      )}
    </div>
  );
};

export default Time;
