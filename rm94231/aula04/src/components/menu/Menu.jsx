import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const menu = {
      display: 'flex',
      fontFamily: 'Roboto, sans-serif',
      justifyContent: 'center',
      listStyle: 'none',
      fontSize: "1.3em"
  }

  const li = {
    marginRight: '3em',
  }
  
  const link = {
    textDecoration: 'none',
    color: "black"
  }


  return (
    <header >
        <nav>
        <ul style={menu}>
            <li style={li}> <Link style={link} to="/">Home</Link> </li>
            <li style={li}> <Link style={link} to="/modamasculina">Moda Masculina</Link> </li>
            <li style={li}> <Link style={link} to="/modafeminina">Moda Feminina</Link> </li>
            <li style={li}> <Link style={link} to="/infantil">Moda Infatil</Link> </li>
            </ul>
        </nav>
    </header>
  )
}
