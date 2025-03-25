import React from "react";

const Singers = (props) => {
  return (
    <div>
      <h2>O nome do cantor é: {props.name} </h2>
      <h2>Seu estilo músical é: {props.genre} </h2>
      {props.award && <h3>E já foi muito premiado</h3>}
    </div>
  );
};

export default Singers;
