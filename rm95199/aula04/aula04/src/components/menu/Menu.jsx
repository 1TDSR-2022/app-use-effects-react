import React from "react"
import {Link} from 'react-router-dom'

export default function Menu(){

    const menuStyle={
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        listDecoration: 'none'
    }

    const listStyle={
        textDecoration: 'none',
        color: '#000',
        justifyContent: 'space-around',
        fontSize: '2em'
    }

    return(

        <header>
            <nav>
                <ul style={menuStyle}>
                    <li><Link to="/" style={listStyle}>HOME</Link></li>
                    <li><Link to="/modaMasculina" style={listStyle}>MODA MASCULINA</Link> </li>
                    <li><Link to="/modaFeminina" style={listStyle}>MODA FEMININA</Link></li>
                    <li><Link to="/modaInfantil" style={listStyle}>MODA INFANTIL</Link></li>
                </ul>
            </nav>
        </header>
    )
}