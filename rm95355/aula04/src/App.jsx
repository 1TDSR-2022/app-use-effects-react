import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import ModaFeminina from './components/ModaFeminina/ModaFeminina'
import ModaInfantil from './components/ModaInfantil/ModaInfantil'
import ModaMasculina from './components/ModaMasculina/ModaMasculina'
import Rodape from './components/Rodape/Rodape'
import Sobre from './components/Sobre/Sobre'


export default function App() {

    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ModaFeminina" element={<ModaFeminina/>}/>
                <Route path="/ModaInfantil" element={<ModaInfantil/>}/>
                <Route path="/ModaMasculina" element={<ModaMasculina/>}/>
            </Routes>
            <Sobre/>
            <Rodape/>
        </>
    )
}