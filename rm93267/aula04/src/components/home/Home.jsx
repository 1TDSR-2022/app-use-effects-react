import React from 'react'
import modaInf from './img/modaInf.jpg'
import modaMasc from './img/modaMasc.jpg'
import modaFem from './img/modaFem.jpg'
import './CSS/home.css'

export default function Home() {

  return(
    <div id='corpo'>
        <div id='cabecalho'>
          <h1>Renner</h1>
          <p>Página Inicial</p>
        </div>

        <div id='modelos'>
          <img src={modaFem} alt="modela" width='20%'/>
          <img src={modaMasc} alt="modelo" width='20%'/>
          <img src={modaInf} alt="modelo mirin" width='20%'/>
        </div>
        <br />
    </div>
  )
}
