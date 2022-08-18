import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Consumer() {
    const [repositorio, setRepositorio] = useState();
    
    useEffect(() => {
        document.title = "Presta atenção"
    }, [])
    
    return (
    <div>
      <h1>Lista de usuários do Github</h1>
    </div>
  )
}