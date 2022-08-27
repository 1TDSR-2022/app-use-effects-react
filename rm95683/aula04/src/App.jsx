import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Produtos from './components/Produtos/Produtos'
import Servicos from './components/Servicos/Servicos'
import Menu from './components/Menu/Menu'

export default function App() {

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                < Route path="/" element={<Home/>} />
                < Route path="/produtos" element={<Produtos/>} />
                < Route path="/servicos" element={<Servicos/>} />
            </Routes>
        </BrowserRouter>
    )
}