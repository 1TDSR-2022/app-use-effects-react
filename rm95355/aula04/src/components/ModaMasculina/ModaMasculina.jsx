import React from 'react';
import masculina1 from '../../img/masculina1.jpg'
import masculina2 from '../../img/masculina2.jpg'
import masculina3 from '../../img/masculina3.jpg'

export default function ModaMasculina() {

    const imagemTamanho={
      height: '20em',
      textAlign: 'center'
    }

    const imagemFont={
      fontSize: '2em'
    }

    const modaMasculina = {
      backgroundColor: '#bfff',
      heigth: '85vh',
      textAlign: 'center',
      color: '#7cc'
    }

  return (
    <div style={modaMasculina}>
        <h1>Página de Moda Masculina</h1>
        <ul>
            <li><img src={masculina1} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão </p>
            <li><img src={masculina2} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão</p>
            <li><img src={masculina3} alt="Foto de moda Feminina" style={imagemTamanho}/></li>
            <p style={imagemFont}>Coleção Verão</p>
        </ul>
    </div>
  )
}