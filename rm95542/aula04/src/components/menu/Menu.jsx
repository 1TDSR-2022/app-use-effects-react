import React from 'react'
import{Link} from 'react-router-dom'
import './menu.css'

export default function Menu() {
  return (
    <header>
        <nav>
            <ul>          
              <li><Link to="/">Home</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/servicos">Servicos</Link></li>
            </ul>
        </nav>
    </header>
  )
}