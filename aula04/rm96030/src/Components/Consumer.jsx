import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Consumer() {



    const [usuarios, setUsuario] = useState([])

    useEffect(() => {

        async function carregaRepo() {
            const response = await fetch("https://api.github.com/users")
            const data = await response.json()
            setUsuario(data)
        }
        carregaRepo()

    }, [])

    useEffect(() => {
        document.title = "USE-EFFECTS ATUALIZOU"
    }, [usuarios])

    return (
        <>
            <h1>Lista de usuários do Github</h1>
            <ul>
                {usuarios.map((usuario) =>
                    <li key={usuario.id}>
                        <figure>
                            <img src={usuario.avatar_url} alt={usuario.login} style={{ width: '200px' }} />
                           
                        </figure>
                    </li>
                )}
            </ul>

        </>
    )
}

// Exercício
// 1 - Recuperar os dados da api externa:
//     a - https://makeup-api.herokuapp.com/

// 2 - Monte um pequeno componente de apresentação com os dados recebidos do EndPoint.
// 3 - Formate com css inline e através de objetos