import React from 'react'
import a from './img/moda_10.jpg'
import b from './img/moda_rex.jpg'
import c from './img/moda_steel.jpg'


export default function ModaInf() {
  return (
    <div id='corpo'>
        <div id='cabecalho'>
          <h1>Moda Feminina</h1>
        </div>

        <div id='modelos'>
          <img src={a} alt="ben10" width='20%'/>
          <h3>Look herói</h3>
          <p>R$50,00</p>
          <br />
          <img src={b} alt="mutante rex" width='20%'/>
          <h3>Look herói</h3>
          <p>R$50,00</p>
          <br />
          <img src={c} alt="max steel" width='20%'/>
          <h3>Look herói</h3>
          <p>R$50,00</p>
          <br />
        </div>
    </div>
  )
}
