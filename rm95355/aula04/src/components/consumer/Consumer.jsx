import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Consumer (){

    // const objeto = {
    //     nome : 'Alan',
    //     profissao : 'Aluno',
    //     id : 1212,
    //     cpf : 123456789 
    // }

    const [usuarios, setUsuario] = useState([])

    useEffect(() => {
        async function carregaRepo() {
            const response = await fetch("https://api.github.com/users")
            const data = await response.json()

            setUsuario(data)
        }
        carregaRepo()

    },[])

    useEffect(() => {
        document.title = "USE-EFFECTS ATUALIZOU"
    },[usuarios])

    return (
        <>
            <h1>Lista de usuários do Github</h1>
            <ul>
                {usuarios.map((usuario) =>
                    <li key={usuario.id}>

                    </li>
                )}
            </ul>
        </>
    )
}