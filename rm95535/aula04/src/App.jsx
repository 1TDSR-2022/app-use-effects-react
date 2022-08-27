import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import Infantil from './components/infantil/Infantil'
import Menu from './components/menu/Menu'
import ModaFeminina from './components/modaFeminina/ModaFeminina'
import ModaMasculina from './components/modaMasculina/ModaMasculina'
import Produtos from './components/produtos/Produtos'
import Rodape from './components/rodape/Rodape'
import Servicos from './components/servicos/Servicos'

export default function App() {
    return (
       <>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/modamasculina' element={<ModaMasculina/>}/>
                <Route path='/modafeminina' element={<ModaFeminina/>}/>
                <Route path='/infantil' element={<Infantil/>}/>
            </Routes>
            <Rodape/>
        </>
    )
}