import React from "react";
import { Link } from "react-router-dom";

export default function Sobre(){
    const sobre = {
        backgroundColor:"#ff8",
        color:'orange',
        height : '85vh',
        textAlign : 'center',
    }
   
    return(
        <div style={sobre}>
        <h1>Página sobre a loja</h1>
        <p>Exemplo de página sobre as informações da loja</p>
    </div>
    )

}