import React from "react"
import Img1 from "../../img/homem_camuflado.webp"
import Img2 from "../../img/homem_moletom.webp"
import Img3 from "../../img/homem_terno.webp"

export default function ModaMasculina() {
    const backgroundStyle = {
        backgroundColor: '8fbc8f'
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
            <h1 style={{textAlign: 'center'}}>MODA MASCULINA</h1>
            <ul style={listaStyle}>
                <li><img src={Img1} alt="foto da coleção Drip" style={imgStyle}/></li>
                <p style={textoStyle}>DRIP COLLECTION</p>
                <li><img src={Img2} alt="foto da coleção Casual" style={imgStyle}/></li>
                <p style={textoStyle}>CASUAL COLLECTION</p>
                <li><img src={Img3} alt="foto da coleção Social" style={imgStyle}/></li>
                <p style={textoStyle}>SOCIAL COLLECTION</p>
            </ul>
        </div>
    )

}