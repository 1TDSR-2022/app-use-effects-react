import React from "react"
import Consumer from "./components/consumer/Consumer"
import Cabecalho from "./components/cabecalho/Cabecalho"

export default function app(){
    return(
        <>
            <Cabecalho/>
            <h1>Exemplos de UseEffects</h1>
            <Consumer/>
        </>
    )
}
