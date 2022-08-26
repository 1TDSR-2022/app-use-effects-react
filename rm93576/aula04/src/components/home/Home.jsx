import React from 'react'
import HomemFt from '../../img/pexels-brian-jr-asare-13221664.jpg'
import MulherFt from '../../img/pexels-brian-jr-asare-13221665.jpg'
import CriancaFt from '../../img/pexels-samer-daboul-1815257.jpg'


export default function Home() {

    const home ={
        backgroundColor : '#ffb',
        heigth: '85vh',
        textAlign: 'center',
        color : 'orange'
    }

    const ftCss ={
      height: '25em',
      borderRadius: '1em',
      width: '20em'
    }

    const ulCss={
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around'
    }

  return (
    <div style={home}>
        <h1>Loja de Roupas - Moda</h1>
        <ul style={ulCss}>
          <li>
        <img src={HomemFt} alt="foto de homem" style={ftCss}/>
          </li>
       
          <li>
        <img src={MulherFt} alt="foto de mulher" style={ftCss}/>
          </li>
          <li>
        <img src={CriancaFt} alt="foto de criança" style={ftCss}/>
          </li>
        </ul>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <p>Moda Masculina</p>
        <p>Moda Feminina</p>
        <p>Moda Infantil</p> 
      </div> 
    </div>
  )
}
