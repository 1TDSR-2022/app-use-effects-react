import React from 'react';
import feminina1 from '../../img/feminina1.jpg'
import feminina2 from '../../img/feminina2.jpg'
import feminina3 from '../../img/feminina3.jpg'

export default function ModaFeminina() {

    const imagemTamanho={
        height: '20em',
        textAlign: 'center'
    }

    const imagemFont={
      fontSize: '2em'
    }
    
    const modaFeminina = {
        backgroundColor: '#d2a8ff',
        heigth: '85vh',
        textAlign: 'center',
        color: '##d2a8f'
    }

  return (
    <div style={modaFeminina}>
        <h1>Página de Moda Feminina</h1>
      <ul >
        <li><img src={feminina1} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
        <p style={imagemFont}>Coleção Verão </p>
        <li><img src={feminina2} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
        <p style={imagemFont}>Coleção Verão</p>
        <li><img src={feminina3} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
        <p style={imagemFont}>Coleção Verão</p>
      </ul>
    </div>
  )
}