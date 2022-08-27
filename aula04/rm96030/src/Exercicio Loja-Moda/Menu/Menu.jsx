import React from "react";
import {Link} from 'react-router-dom'
import './Menu.css'
export default function Menu(){
    return(
            <header className="father">
                <ul>
                    <li ><Link to="/" style={{ textDecoration: 'none',color:'white'}}>Home</Link ></li>
                    <li><Link to="/masculino" style={{ textDecoration: 'none',color:'white'}}>Masculino</Link></li>
                    <li><Link to="/feminino" style={{ textDecoration: 'none',color:'white'}}>Feminino</Link></li>
                    <li><Link to="/infantil" style={{ textDecoration: 'none',color:'white'}}>Infantil</Link></li>
                    <li><Link to="/sobre" style={{ textDecoration: 'none',color:'white'}}>Sobre</Link></li>
                </ul>
            </header>
    )
}