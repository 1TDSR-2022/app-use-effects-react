import React from "react";
import regata from "./regata.png";
import vestido from "./vestido.png";
import pijama from "./pijama.png";
import Rodape from "../rodape/Rodape";

export default function ModaInfantil() {
  const modaInfantil = {
    backgroundColor: "#ffb",
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
    <div style={modaInfantil}>
      <section style={header}>
        <h1>Moda Infantil 2022</h1>
        <h2>Kyly</h2>
        <p>
          A Kyly é uma marca de vestuário infantil voltada às crianças que
          celebram as novas descobertas com muita alegria e brincadeiras ao ar
          livre. Com roupas infantis que combinam diversão e conforto, a marca
          veste crianças do tamanho P ao 16. Vem com a gente! A brincadeira vai
          começar!
        </p>
      </section>
      <section style={conteudo}>
        <h3>Tendência</h3>
        <img src={regata} alt="regata" height={400} />
        <p>Regata Infantil Masculina Kyly Meia Malha R$ 34,90</p>
        <img src={vestido} alt="vestido" height={400} />
        <p>Vestido Infantil Kyly Meia Malha R$ 44,90</p>
        <img src={pijama} alt="pijama" height={400} />
        <p>Blusa Pijama Infantil Feminina Kyly Moletom R$ 29,90</p>
      </section>
      <Rodape />
    </div>
  );
}
