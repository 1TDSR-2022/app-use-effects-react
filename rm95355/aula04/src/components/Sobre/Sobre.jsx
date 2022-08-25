import React from 'react';

export default function Sobre() {

    const sobre = {
      backgroundColor: '#3fb950',
      heigth: '85vh',
      textAlign: 'center',
      color: '#010409',
    }

  return (
    <div style={sobre}>
        <h1>Integrantes do Grupo</h1>
        <ul>
            <p>Alan Araujo - RM95355</p>
            <p>Tininha - RM95741</p>
            <p>Picabuloso - RM94983</p>
            <p>Ana Karolyne - RM93668</p>
            <p>Iago Coelho - RM98683</p>
        </ul>
    </div>
  )
}