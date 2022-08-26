import React from 'react'
import {Link} from 'react-router-dom'

export default function Rodape() {

    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </footer>
    )
}