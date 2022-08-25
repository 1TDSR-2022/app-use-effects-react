import React from 'react';
import infantil1 from '../../img/infantil1.jpg'
import infantil2 from '../../img/infantil2.jpg'
import infantil3 from '../../img/infantil3.jpg'

export default function ModaInfantil() {

    
    const imagemTamanho={
        height: '20em',
        textAlign: 'center'
    }

    const imagemFont={
      fontSize: '2em'
    }

    const modaInfantil = {
        backgroundColor: '#b6c517',
        heigth: '85vh',
        textAlign: 'center',
        color: '#d29922'
    }

  return (
    <div style={modaInfantil}>
        <h1>Página de Moda Infantil</h1>
        <ul>
            <li><img src={infantil1} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão </p>
            <li><img src={infantil2} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão</p>
            <li><img src={infantil3} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão</p>
        </ul>
    </div>
  )
}