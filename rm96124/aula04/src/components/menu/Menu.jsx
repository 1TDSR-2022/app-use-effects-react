import React from 'react'
import {Link} from 'react-router-dom'
import MenuCss from '../menu/Menu.css'

export default function Menu() {

  return (
    <header style={MenuCss}>
        <nav >
            <ul className='menu-container'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to ='/sobre'>Sobre</Link></li>
            </ul>
        </nav>
    </header>
  )
}
