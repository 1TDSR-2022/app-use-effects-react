import React from "react";
import { useState, useEffect } from "react";

export default function Consumer() {
  const [repositorio, setRepositorio] = useState();
  useEffect(() => {
    document.title = "USE-EFFECTS";
  }, []);
  useEffect(() => {
    document.title = "USE-EFFECTS";
  }, [repositorio]);

  return (
    <div>
      <h1>Lista de usuários do Github</h1>
    </div>
  );
}
