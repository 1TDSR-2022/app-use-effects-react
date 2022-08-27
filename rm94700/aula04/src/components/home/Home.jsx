import React from 'react'
import modaInf from './img/modaInf.jpg'
import modaMasc from './img/modaMasc.jpg'
import modaFem from './img/modaFem.jpg'

export default function Home() {

  const corpo={
    backgroundColor: '#DC143C',
    borderRadius: '10px'
  }
  const cabecalho={
    color: 'white',
    textAlign: 'center'
  }
  const modelos={
    textAlign: 'center'
  }
  const img={
    border: 'solid 4px white',
    borderRadius: '10px',
    marginRight: '50px',
    marginLeft: '50px'
  }

  return(
    <div style={corpo}>
        <div style={cabecalho}>
          <h1>C&A</h1>
          <p>Página Inicial</p>
        </div>

        <div style={modelos}>
          <img style={img} src={modaFem} alt="modela" width='20%'/>
          <img style={img} src={modaMasc} alt="modelo" width='20%'/>
          <img style={img} src={modaInf} alt="modelo mirin" width='20%'/>
        </div>
        <br />
    </div>
  )
}
