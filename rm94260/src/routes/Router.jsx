import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ModaFeminina from '../pages/ModaFeminina/ModaFeminina'
import ModaInfantil from '../pages/ModaInfantil/ModaInfantil'
import ModaMasculina from '../pages/ModaMasculina/ModaMasculina'
import Sobre from '../pages/Sobre/Sobre'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/modamasculina' element={ <ModaMasculina /> } />
      <Route path='/modafeminina' element={ <ModaFeminina /> } />
      <Route path='/modainfantil' element={ <ModaInfantil /> } />
      <Route path='/sobre' element={ <Sobre /> } />
    </Routes>
  )
}

export default Router
