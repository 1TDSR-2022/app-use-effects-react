import React from 'react';
import Imagem1 from '../../img/pexels-cristian-benavides-3662357.jpg' 
import Imagem2 from '../../img/pexels-shvets-production-9775724.jpg' 
import Imagem3 from '../../img/pexels-visión-de-enfoque-3341231.jpg' 



export default function ModaMasculina (){
    
    const bgCss={
        backgroundColor: 'red'
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
                <li><img src={Imagem1} alt="foto de moda masculina" style={ImgCss}/></li>
                <p style={pCss}>Camisa lisa preta </p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}>A partir de R$99,90</p>
                <li><img src={Imagem2} alt="foto de moda masculina" style={ImgCss}/></li>
                <p style={pCss}>Coleção StreetWear Azul bebê</p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}>A partir de R$120,00</p>
                <li><img src={Imagem3} alt="foto de moda masculina" style={ImgCss}/></li>
                <p style={pCss}>Coleção Running Amarela</p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}>A partir de R$99,90</p>
            </ul>
            
        </div>
    )
}



