import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  const header = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#fff',
    boxShadow: '0 1px 1px rgba(0, 0, 0, .1)',
    padding: '0 1rem',
    zIndex: '200'
  }

  const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '60px',
  }

  const ul = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '1rem',
  }

  return (
    <header style={ header }>
      <nav style={ nav }>
        <Link to='/'><b>Logo</b></Link>
        <ul style={ ul }>
          <li><Link to="/"></Link></li>
          <li><Link to="modamasculina">Moda Masculina</Link></li>
          <li><Link to="modafeminina">Moda Feminina</Link></li>
          <li><Link to="modainfantil">Moda Infantil</Link></li>
          <li><Link to="sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
