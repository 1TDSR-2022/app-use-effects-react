import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {

   const menuCss={
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      listDecoration: 'none'
    }
  
  return (

    <header>
        <nav>
            <ul style={menuCss}>
                <li><Link to="/" style={{textDecoration: 'none', color: '#000', fontSize: '1.5em'}}>Home</Link></li>
                {/* <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/servicos">Serviços</Link></li> */}
                <li><Link to="/modaMasculina" style={{textDecoration: 'none', color: '#000', fontSize: '1.5em'}}>Moda Masculina</Link></li>
                <li><Link to="/modaFeminina" style={{textDecoration: 'none', color: '#000', fontSize: '1.5em'}} >Moda Feminina</Link></li>
                <li><Link to="/modaInfantil" style={{textDecoration: 'none', color: '#000', fontSize: '1.5em'}} >Moda Infantil</Link></li>
                <li><Link to="/sobre" style={{textDecoration: 'none', color: '#000', fontSize: '1.5em'}} >Sobre</Link></li>
            </ul>
        </nav>    
    </header>
  )
}
