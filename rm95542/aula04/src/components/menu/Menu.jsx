import React from 'react'
import{Link} from 'react-router-dom'
export default function Menu() {
  return (

    <header>
        <nav>
            <ul>
                <BrowserRouter>
            
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/servicos">Servicos</Link></li>
                </BrowserRouter>
            </ul>
        </nav>
    </header>
  )
}
