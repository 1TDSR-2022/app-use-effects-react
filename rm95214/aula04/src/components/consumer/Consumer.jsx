import React from "react"
import { useState } from "react"
import { useEffect } from "react"

export default function Consumer(){

    const [usuarios, setUsuario] = useState([])

    useEffect(()=>{
        
        async function carregaRepo(){
            const response = await fetch("https://api.githutb.com/users")
            const data = await response.json()

            setUsuario(data)
            
        } 
        carregaRepo()

    } ,[])

    useEffect(()=>{
        document.title = 'USE-STATE ATUALIZOU'
    } ,[usuarios])



    return(
        <div>
            <h1>Lista de usuarios do Github</h1>
           <ul>
            {usuarios.map((usuario, i)=>
                <li key={i}>{usuario.login}</li>
            )}
           </ul>
        </div>
    )
}