import React from "react";
import { useEffect } from "react";

export default function Consumer(){

    const [repositorio, setRepositorio] = useState()

    useEffect(()=>{
        document.title= "USE-EFFECTS"
    },[])

    
    return(
        <>
            <h1>Lista de usuários do Github</h1>
        </>
    )
}