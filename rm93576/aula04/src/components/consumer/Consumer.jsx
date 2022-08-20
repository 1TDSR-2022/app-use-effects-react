import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Consumer(){

    // const objeto = {
    //     nome: 'Abner',
    //     profissao : 'Estudante',
    //     id: 213213,
    //     cpf: 42341234
    // }

    const [usuarios, setUsuario] = useState([])
    useEffect(()=>{

        async function carregaRepo(){
            const response = await fetch ("https://api.github.com/users")
            const data = await response.json()
            setUsuario(data)
        }
        carregaRepo()
    },[])

    useEffect(()=>{
        document.tittle = "use-effects atualizado"

    },[usuarios])

    return(
        <div>
            <h1>Lista de usuários do GitHub</h1>
            <ul>
                {usuarios.map((usuario)=>
                    <li key={usuario.id}>
                        <figure>

                        <img src={usuario.avatar_url} alt={usuario.login} style={{width: '200px'}}/>
                        <figcaption><a href={usuario.html_url}>{usuario.login}</a></figcaption>
                        </figure>
                    </li>
                )}
            </ul>
            
        </div>
    )
}

/* Exercicio
1 - Recuperar os dados da api externa:
a - https://makeup-api.herokuapp.com/

2 - Monte um pequeno componente de apresentacao com os dados recebidos do EndPoint
3 - Formate com css inline e atraves de objetos */