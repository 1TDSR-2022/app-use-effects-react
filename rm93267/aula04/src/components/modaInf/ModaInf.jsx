import React from 'react'
import a from './img/moda_10.jpg'
import b from './img/moda_rex.jpg'
import c from './img/moda_steel.jpg'


export default function ModaInf() {

  const corpo={
    backgroundColor: '#4169E1',
    borderRadius: '10px'
  }
  const cabecalho={
    color: 'white',
    textAlign: 'center'
  }
  const img={
    border: 'solid 4px white',
    borderRadius: '10px',
    marginRight: '50px',
    marginLeft: '50px'
  }
  const modelos={
    textAlign: 'center'
  }
  const p={
    textDecoration: 'underline'
  }

  return (
    <div style={corpo}>
        <div style={cabecalho}>
          <h1>Moda Infantil</h1>
        </div>

        <div style={modelos}>
          <img style={img} src={a} alt="ben10" width='20%'/>
          <h3>Look herói</h3>
          <p style={p}>R$50,00</p>
          <br />
          <img style={img} src={b} alt="mutante rex" width='20%'/>
          <h3>Look herói</h3>
          <p style={p}>R$50,00</p>
          <br />
          <img style={img} src={c} alt="max steel" width='20%'/>
          <h3>Look herói</h3>
          <p style={p}>R$50,00</p>
          <br />
        </div>
    </div>
  )
}
