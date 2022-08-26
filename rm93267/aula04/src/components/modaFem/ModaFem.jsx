import React from 'react'
import a from './img/cropped_casual.jpg'
import b from './img/cropped_inverno.jpg'
import c from './img/cropped_street.jpg'
import './CSS/modaFem.css'

export default function ModaFem() {
  return (
    <div id='corpo'>
        <div id='cabecalho'>
          <h1>Moda Feminina</h1>
        </div>

        <div id='modelos'>
          <img src={a} alt="cropped casual" width='20%'/>
          <br />
          <img src={b} alt="cropped inverno" width='20%'/>
          <br />
          <img src={c} alt="cropped street" width='20%'/>
        </div>
    </div>
  )
}
