import React from "react";
import conjunto from "./conjunto.png";
import moletom from "./moletom.png";
import moletom2 from "./moletom2.png";
import Rodape from "../rodape/Rodape";

export default function ModaMasculina() {
  const modaMasculina = {
    backgroundColor: "#fbf",
    color: "purple",
    margin: "2vh",
    padding: "6vh",
  };
  const header = {};
  const conteudo = {
    textAlign: "center",
    color: "grey",
  };
  return (
    <div style={modaMasculina}>
      <section style={header}>
        <h1>Moda Masculina 2022</h1>
        <h2>Hering </h2>
        <p>
          Companhia Hering é uma empresa brasileira especializada em vestuário.
          Seu principal produto, a marca Hering, também é sinônimo do grupo
          empresarial como um todo, que abrange também as marcas Hering Kids,
          Dzarm e PUC.
        </p>
      </section>
      <section style={conteudo}>
        <h3>Tendência</h3>
        <img src={conjunto} alt="conjunto" height={400} />
        <p>Camisa Masculina Manga Curta Texturizada - Verde R$219,99</p>
        <img src={moletom} alt="vestido" height={400} />
        <p>Blusão Masculino Comfort Em Moletom Peluciado - Azul R$ 55,99</p>
        <img src={moletom2} alt="moletom" height={400} />
        <p>
          Blusão Básico Masculino De Moletom Peluciado Comfort - Azul R$139,99
        </p>
      </section>
      <Rodape />
    </div>
  );
}
