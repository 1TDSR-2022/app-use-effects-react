import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Produto from './components/Produto/Produto'
import Servicos from './components/Servicos/Servicos'


export default function App() {

    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
            </Routes>
        </>
    )
}