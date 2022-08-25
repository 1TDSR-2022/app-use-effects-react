import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home"
import Menu from "./components/menu/Menu"
import Produtos from "./components/produtos/Produtos"
import Servicos from "./components/servicos/Servicos"
import Rodape from "./components/rodape/Rodape"
import ModaMasculina from "./components/modaMasc/ModaMasculina"
import ModaFeminina from "./components/modaFem/ModaFeminina"
import ModaInfantil from "./components/modaInfant/ModaInfantil"


export default function App() {
    
    return(
    <>
            
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/ModaMasculina" element={<ModaMasculina/>}/> 
                <Route path="/ModaFeminina" element={<ModaFeminina/>}/> 
                <Route path="/ModaInfantil" element={<ModaInfantil/>}/> 
            </Routes>
            <Rodape/>
    </>
    )
}