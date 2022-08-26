import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Produtos from './Components/Produtos'
import Servicos from './Components/Servicos'

export default function App() {

    return (
      <>
      
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/servicos" element={<Servicos/>} />
            </Routes>
            </>

    )
}