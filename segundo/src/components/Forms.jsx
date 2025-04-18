import React, { useState } from "react";
import styles from "./Forms.module.css";

const Forms = (props) => {
  const [nome, setNome] = useState(props ? props.nome : "");
  const [email, setEmail] = useState(props ? props.email : "");
  const [senha, setSenha] = useState(props ? props.senha : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
  };
  const handleName = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };
  return (
    <div>
      <h4>Forms</h4>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          onChange={handleName}
          value={nome}
        />
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha..."
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            value={senha}
          />
        </label>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: "blue", color: "white" }}
        />
      </form>
    </div>
  );
};

export default Forms;
