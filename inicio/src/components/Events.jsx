import React from "react";

const Events = () => {
  const teste = (e) => {
    // e = propriedades do evento que chamou a função
    console.log(e)
    // console.log("Teste a função externa");
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Teste primeiro botão");
        }}
      >
        Clik k aki
      </button>
      <br />
      <button onClick={teste}>Cli k Jogos</button>
    </div>
  );
};

export default Events;
