import React from 'react';
import Imagem1 from '../../img/pexels-jansel-ferma-2085118.jpg' 
import Imagem2 from '../../img/pexels-rafael-barros-2608344.jpg' 
import Imagem3 from '../../img/pexels-godisable-jacob-965324.jpg' 



export default function ModaFeminina (){
    
    const bgCss={
        backgroundColor: 'pink'
    }

    const ImgCss={
        height: '20em',
        textAlign: 'center'
    }
    const liCss={
        listStyle: 'none',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const pCss={
        fontSize: '2em'
    }

    return (
        <div style={bgCss}>
            <h1 style={{textAlign: 'center'}}>Moda Masculina</h1>
            <ul style={liCss}>
                <li><img src={Imagem1} alt="foto de moda feminina" style={ImgCss}/></li>
                <p style={pCss}>Coleção Photograph </p>
                <li><img src={Imagem2} alt="foto de moda feminina" style={ImgCss}/></li>
                <p style={pCss}>Coleção StreetWear feminina</p>
                <li><img src={Imagem3} alt="foto de moda feminina" style={ImgCss}/></li>
                <p style={pCss}>Coleção Running Preta</p>
            </ul>
            
        </div>
    )
}



