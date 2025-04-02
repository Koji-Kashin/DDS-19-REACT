import React from "react";
import { Form } from "react-router-dom";
import Forms from "../components/Forms";
import NewForms from "../components/NewForms";
const Cadastro = () => {
  return (
    <div>
      <h4>
        Cadastro
        {/* <Forms /> */}
        {/* <Forms nome="Cristiano Ronaldo" email="cr7@thebest.com" senha="goat7" /> */}

        <NewForms/>
      </h4>
    </div>
  );
};

export default Cadastro;
