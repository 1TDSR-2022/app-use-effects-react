import React from "react";
import casaco from "./casaco.png";
import colete from "./colete.png";
import jaqueta from "./jaqueta.png";
import Rodape from "../rodape/Rodape";

export default function ModaFeminina() {
  const modaFeminina = {
    backgroundColor: "#bbb",
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
    <div style={modaFeminina}>
      <section style={header}>
        <h1>Moda Feminina 2022</h1>
        <h2>Shein</h2>
        <p>
          Shein é uma varejista chinesa de fast fashion online. Foi fundada em
          2008 por Chris Xu em Nanquim, na China. A empresa é conhecida por seu
          vestuário com preços acessíveis. Em seus estágios iniciais, a Shein
          era mais um negócio de remessa direta do que uma varejista.
        </p>
      </section>
      <section style={conteudo}>
        <h3>Tendência</h3>
        <img src={casaco} alt="casaco pelúcia" height={400} />
        <p>Casaco de pelúcia com capuz R$82,95</p>
        <img src={colete} alt="colete" height={400} />
        <p>Simples ocasional Top de malha R$71,99</p>
        <img src={jaqueta} alt="casaco pelúcia" height={400} />
        <p>
          DAZY Bolso Zíper Bloco de cores ocasional Casacos femininos de inverno
          R$216,99
        </p>
      </section>
      <Rodape />
    </div>
  );
}
