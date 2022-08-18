import React from "react"
import { useState } from "react"
import { useEffect } from "react"

export default function Consumer(){

    const [respositorio, setReporistorio] = useState()

    useEffect(()=>{
        document.title = 'USE-EFFECTS'
    } ,[])

    useEffect(()=>{
        document.title = 'USE-STATE ATUALIZOU'
    } ,[respositorio])

    return(
        <div>
            <h1>Lista de usuarios do Github</h1>
            
        </div>
    )
}