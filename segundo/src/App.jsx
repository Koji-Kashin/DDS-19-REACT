import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/showUserName";
import Time from "./components/Time";
import Cantores from "./components/Cantores";
import Singers from "./components/Singers";

function App() {
  const n = 10;
  const titulo = true;
  const nome = "Junior";
  const [name] = useState("Perdigoto");
  const [cantores] = useState([
    {
      id: 1,
      nome: "Ice-cube",
      estiloMusical: "Rap",
      premiado: true,
    },
    {
      id: 2,
      nome: "Eminem",
      estiloMusical: "Rap",
      premiado: true,
    },
    {
      id: 3,
      nome: "Juninho Ramelador",
      estiloMusical: "MPB",
      premiado: false,
    },
    {
      id: 4,
      nome: "Flavin fala mansa",
      estiloMusical: "Afro-hit",
      premiado: false,
    },
  ]);
  return (
    <>
      {/* //Renderização de componente com props */}
      {/* <ShowUserName name={nome} shirt="7" /> */}
      {/* Renderização com desestruturação */}
      {/* <Time
        nome="Vasco da Gama"
        estado="RJ_Milgrau"
        posicao="1"
        campeao={true}
      />
      <hr />
      <Time nome="Manschester United" estado="UK" posicao="2" campeao={true} />
      <hr />  
      <Time nome="São Paulo" estado="SP" posicao="1000" campeao={false} />
      <hr />   */}
      {/* <Cantores id="1" nome="Michael Jackson" estiloMusical="Pop" premiado={true}/>
      <hr />
      <Cantores id="2" nome="Elvis Presley" estiloMusical="Rock" premiado={true}/>
      <hr />
      <Cantores id="3" nome="Bob Marley" estiloMusical="Reggae" premiado={true}/>
      <hr />
      <Cantores id="4" nome="Jimi Hendrix" estiloMusical="Rock" premiado={true}/>
      <hr />
      <Cantores id="5" nome="Freddie Mercury" estiloMusical="Rock" premiado={false}/>
      <hr />
      <Cantores id="6" nome="David Bowie" estiloMusical="Rock" premiado={false}/> 
      <hr /> */}
      {/* {
        cantores.map((cantor) => (
          <Singers key={cantor.id} name={cantor.name} genre={cantor.genre} award={cantor.award}/>
        )  
        ))} */}

      <h2
        style={
          n > 5
            ? { color: "green", backgroundColor: "black", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "20px" }
        }
      >
        Este Css é dinâmico
      </h2>
      <h2
        style={
          n > 5
            ? { color: "green", backgroundColor: "black", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "20px" }
        }
      >
        Este Css também é dinâmico
      </h2>

      <h1
        className={
          titulo ? "titulo-incrivel" : "texto-paia"}
      >Título incrivel para teste</h1>
    </>
  );
}

export default App;
