import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Consumer (){

    const [repositorio, setRepositorio] = useState()

    useEffect(() => {
        document.title = "USE-EFFECTS"
    },[])

    useEffect(() => {
        document.title = "USE-EFFECTS ATUALIZOU"
    },[repositorio])

    return (
        <>
            <h1>Lista de usuários do Github</h1>
        </>
    )
}