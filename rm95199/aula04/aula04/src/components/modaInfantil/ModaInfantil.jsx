import React from "react"
import Img1 from "../../img/crianca_polo.jpg"
import Img2 from "../../img/crianca_sueter.jpg"
import Img3 from "../../img/crianca_trico.jpg"

export default function ModaInfantil() {
    const backgroundStyle = {
        backgroundColor: 'b0e0e6'
    }

    const imgStyle = {
        height: '20em',
        textAlign: 'center'
    }

    const listaStyle = {
        listStyleType: 'none',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const textoStyle = {
        fontSize: '2.5em'
    }
    
    return(
        <div style={backgroundStyle}>
            <h1 style={{textAlign: 'center'}}>MODA INFANTIL</h1>
            <ul style={listaStyle}>
                <li><img src={Img1} alt="foto da coleção Baby" style={imgStyle}/></li>
                <p style={textoStyle}>BABY COLLECTION</p>
                <li><img src={Img2} alt="foto da coleção Meninol" style={imgStyle}/></li>
                <p style={textoStyle}>BOY COLLECTION</p>
                <li><img src={Img3} alt="foto da coleção Menina" style={imgStyle}/></li>
                <p style={textoStyle}>GIRL COLLECTION</p>
            </ul>
        </div>
    )

}