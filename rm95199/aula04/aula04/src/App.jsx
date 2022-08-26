import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Servicos from "./components/servicos/Servicos"
import Produtos from "./components/produtos/Produtos"
import Menu from "./components/menu/Menu"
import ModaMasculina from "./components/modaMasculina/ModaMasculina"
import ModaFeminina from "./components/modaFeminina/ModaFeminina"
import ModaInfantil from "./components/modaInfantil/ModaInfantil"
import Rodape from "./components/rodape/Rodape"

export default function App() {
  return (
  <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/modaMasculina' element={<ModaMasculina />} />
        <Route path='/modaFeminina' element={<ModaFeminina />} />
        <Route path='/modaInfantil' element={<ModaInfantil />} />
        <Route path='/rodape' element={<Rodape />} />
      </Routes>
      <Rodape />
  </>
  )
}