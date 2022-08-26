import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import Produtos from './components/produtos/Produtos'
import Rodape from './components/rodape/Rodape'
import Servicos from './components/servicos/Servicos'
import Sobre from './components/sobre/Sobre'

export default function App() {

    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/servicos" element={<Servicos/>} />
                <Route path="/sobre" element={<Sobre/>} />
            </Routes>
            <Rodape/>
        </>

    )
}