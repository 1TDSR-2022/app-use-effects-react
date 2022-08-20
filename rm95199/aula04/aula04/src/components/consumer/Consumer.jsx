import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Consumer() {
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {

      async function carregarUsuarios() {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setUsuarios(data)
        carregarUsuarios()
      }
    }, [])
    
    useEffect(() => {  
      document.title = "USE-EFFECTS"
    }, [usuarios])
    
    return (
      <div>
        <h1>Lista de usuários do Github</h1>
        <ul>
          {usuarios && usuarios.map(usuario => (
            <li key={usuario.id}>
              <figure>
                <img src={usuario.avatar_url} alt={usuario.login} />
                <figcaption>
                  <a href={usuario.html_url}>
                    {usuario.login}
                  </a>
                </figcaption>
              </figure>
              {usuario.login}</li>
          ))}
        </ul>
      </div>
    )
}
