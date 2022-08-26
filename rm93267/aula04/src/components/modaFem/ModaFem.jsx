import React from 'react'
import a from './img/cropped_casual.jpg'
import b from './img/cropped_inverno.jpg'
import c from './img/cropped_street.jpg'


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
          <img src={c} alt="cropped street" width='20%'/>
          <h3>Look Street</h3>
          <p>R$50,00</p>
          <br />
        </div>
    </div>
  )
}
