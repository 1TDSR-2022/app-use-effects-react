import React from 'react';
import Imagem1 from '../../img/pexels-felix-adams-9303152.jpg' 
import Imagem2 from '../../img/pexels-victoria-borodinova-1651888.jpg' 
import Imagem3 from '../../img/pexels-victoria-borodinova-1620760.jpg' 



export default function ModaFeminina (){
    
    const bgCss={
        backgroundColor: 'orange'
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
            <h1 style={{textAlign: 'center'}}>Moda Infantil</h1>
            <ul style={liCss}>
                <li><img src={Imagem1} alt="foto de moda infantil" style={ImgCss}/></li>
                <p style={pCss}>Coleção Back to Past</p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}>A partir de R$80,00</p>
                <li><img src={Imagem2} alt="foto de moda infantil" style={ImgCss}/></li>
                <p style={pCss}>Coleção A Moda Antiga</p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}> A partir de R$65,00</p>
                <li><img src={Imagem3} alt="foto de moda infantil" style={ImgCss}/></li>
                <p style={pCss}>Coleção Pijama Mares e Rios</p>
                <p style={{fontSize: '2em', textDecoration: 'underline'}}> A partir de R$120,00</p>
            </ul>
            
        </div>
    )
}



