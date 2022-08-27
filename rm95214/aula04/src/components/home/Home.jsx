import React from 'react'
import fem from './img/modafeminina.jpg'
import masc from './img/modamasculina.jpg'
import infa from './img/modainfantil.jpg'

export default function Home(){
        
    const header={
        backgroundColor: '#00009C'
    }
    const body={
        backgroundColor: '#23238E',
        textAlign: 'center',
        color: 'white'
    }

    
    
    
    return(
            <>
                <div style={header}>
                </div>
                <div style={body}></div>
                <div>
                    <img src={fem}/>
                    <h2>Moda Feminina</h2>
                </div>
                <div>
                    <img src={masc}/>
                    <h2>Moda Masculina</h2>
                </div>
                <div>
                    <img src={infa}/>
                    <h2>Moda Infantil</h2>
                </div>
            </>
        )   
}