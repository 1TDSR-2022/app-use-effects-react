import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Consumer(){
    
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
            <h1>Lista de Usuários do GitHub</h1>
            <ul>
                {usuarios.map((usuario) => 
                    <li key={usuario.id}>
                        <figure>
                            <img src={usuario.avatar_url} alt={usuario.login} style={{width: '200px'}}></img>
                            <figcaption><a href={usuario.html_url}>{usuario.login}</a></figcaption>
                        </figure>
                    </li>
                    
                )}
            </ul>
        </>
    )
}