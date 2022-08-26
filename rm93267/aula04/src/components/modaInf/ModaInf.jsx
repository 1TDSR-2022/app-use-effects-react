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
          <img src={a} alt="cropped casual" width='20%'/>
          <br />
          <img src={b} alt="cropped inverno" width='20%'/>
          <br />
          <img src={c} alt="cropped street" width='20%'/>
        </div>
    </div>
  )
}
