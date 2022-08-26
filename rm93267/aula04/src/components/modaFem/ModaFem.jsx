import React from 'react'
import a from './img/cropped_casual.jpg'
import b from './img/cropped_inverno.jpg'
import c from './img/cropped_street.jpg'


export default function ModaFem() {

  const corpo={
    backgroundColor: '#EE82EE',
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
          <h1>Moda Feminina</h1>
        </div>

        <div style={modelos}>
          <img style={img} src={a} alt="cropped casual" width='20%'/>
          <h3>Look casual</h3>
          <p style={p}>R$50,00</p>
          <br />
          <img style={img} src={b} alt="cropped inverno" width='20%'/>
          <h3>Look Inverno</h3>
          <p style={p}>R$80,00</p>
          <br />
          <img style={img} src={c} alt="cropped street" width='20%'/>
          <h3>Look Street</h3>
          <p style={p}>R$50,00</p>
          <br />
        </div>
    </div>
  )
}
