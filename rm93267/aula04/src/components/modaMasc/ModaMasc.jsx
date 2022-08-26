import React from 'react'
import a from './img/moda_italia.jpg'
import b from './img/moda_street.jpg'



export default function ModaFem() {
  return (
    <div id='corpo'>
        <div id='cabecalho'>
          <h1>Moda Feminina</h1>
        </div>

        <div id='modelos'>
          <img src={a} alt="cropped casual" width='20%'/>
          <h3>Look casual</h3>
          <p>R$50,00</p>
          <br />
          <img src={b} alt="cropped inverno" width='20%'/>
          <h3>Look Inverno</h3>
          <p>R$80,00</p>
          <br />
        </div>
    </div>
  )
}
