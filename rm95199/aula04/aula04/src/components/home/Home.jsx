import React from "react"

import ImgMasculino from "../../img/homem_polo.webp"
import ImgFeminino from "../../img/mulher_camisa.webp"
import ImgInfantil from "../../img/crianca_casaco.jpg"

export default function Home() {
    
    const pageStyle = {
        backgroundColor: '#eee8aa',
        height: '80vh',
        textAlign: 'center',
        color: 'fb9e86',
        fontFamily: 'sans-serif'
    }

    const imgStyle = {
        height: '25em',
        borderRadius: '1em',
        width: '20em'
    }

    const listaStyle = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around'
    }

    return (
        <div style={pageStyle}>
            <h1>CLOTHES STORE</h1>
            <ul style={listaStyle}>
                <li><img src={ImgMasculino} alt="foto da coleção masculina" style={imgStyle}/></li>
                <li><img src={ImgFeminino} alt="foto da coleção feminina" style={imgStyle}/></li>
                <li><img src={ImgInfantil} alt="foto da coleção infantil" style={imgStyle}/></li>
            </ul>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h2>MODA MASCULINA</h2>
                <h2>MODA FEMININA</h2>
                <h2>MODA INFANTIL</h2>
            </div>
        </div>
    )
}