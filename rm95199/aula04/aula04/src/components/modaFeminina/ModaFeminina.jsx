import React from "react"
import Img1 from "../../img/mulher_blazer.webp"
import Img2 from "../../img/mulher_cropped.webp"
import Img3 from "../../img/mulher_macacao.webp"


export default function ModaFeminina() {

    const backgroundStyle = {
        backgroundColor: 'ffb6c1'
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
            <h1 style={{textAlign: 'center'}}>MODA FEMININA</h1>
            <ul style={listaStyle}>
                <li><img src={Img1} alt="foto da coleção de inverno" style={imgStyle}/></li>
                <p style={textoStyle}>AUTUMN/WINTER COLLECTION</p>
                <li><img src={Img2} alt="foto da coleção de verão" style={imgStyle}/></li>
                <p style={textoStyle}>SPRING/SUMMER COLLECTION</p>
                <li><img src={Img3} alt="foto da coleção de estilo único" style={imgStyle}/></li>
                <p style={textoStyle}>UNIQUE STYLE COLLECTION</p>
            </ul>
        </div>
    )

}