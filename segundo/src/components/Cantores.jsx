import React from "react";

const Cantores = ({ id, nome, estiloMusical, premiado }) => {
  return (
    <div>
      <h1>O nome do cantor é: {nome}</h1>
      <h2>O estilo Músical dele é: {estiloMusical} </h2>
      {(premiado && <h3>Este cantor é muito premiado</h3>) || (
        <h3>Este cantor não é premiado</h3>
      )}
    </div>
  );
};

export default Cantores;
