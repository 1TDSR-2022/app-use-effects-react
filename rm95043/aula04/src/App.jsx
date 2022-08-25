import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Serviços from './components/servicos/Serviços'

export default function App() {

    return (
        <>
         
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>  
                <Route path="/servicos" element={<Serviços/>}/>
            </Routes>      
        </>
    )
}