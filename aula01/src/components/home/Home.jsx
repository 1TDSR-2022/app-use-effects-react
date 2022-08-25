import React from "react";
import Rodape from "../rodape/Rodape";

export default function Home() {
  const home = {
    backgroundColor: "#ffb",
    height: "85vh",
    textAlign: "center",
    color: "orange",
    padding: "6vh",
  };
  return (
    <div style={home}>
      <h1>Página Principal</h1>
      <p>Clique nos links acima para explorar a página!</p>
      <Rodape />
    </div>
  );
}
