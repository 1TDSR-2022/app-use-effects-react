import React from 'react'
import a from './img/moda_italia.jpg'
import b from './img/moda_street.jpg'



export default function ModaFem() {

  const corpo={
    backgroundColor: '#FF8C00',
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
          <h1>Moda Masculina</h1>
        </div>

        <div style={modelos}>
          <img style={img} src={a} alt="cropped casual" width='20%'/>
          <h3>Modelo casual</h3>
          <p style={p}>R$69,99</p>
          <br />
          <img style={img} src={b} alt="cropped inverno" width='20%'/>
          <h3>Modelo Inverno</h3>
          <p style={p}>R$79,99</p>
          <br />
        </div>
    </div>
  )
}
