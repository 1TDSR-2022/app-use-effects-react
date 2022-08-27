import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Menu from './Exercicio Loja-Moda/Menu/Menu'
import ModaFeminina from './Exercicio Loja-Moda/modaFeminina/ModaFeminina'
import Home from './Exercicio Loja-Moda/home/Home'
import Rodape from './Exercicio Loja-Moda/footer/Footer'
import ModaMasculina from './Exercicio Loja-Moda/modaMasculina/modaMasculina'
import ModaInfantil from './Exercicio Loja-Moda/modaInfantil/ModaInfantil'
import Sobre from './Exercicio Loja-Moda/Sobre/Sobre'
export default function App() {

    return (
      <>
            <Menu/>
          
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/masculino" element={<ModaMasculina/>} />
                <Route path="/feminino" element={<ModaFeminina/>} />
                <Route path="/infantil" element={<ModaInfantil/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>

            <Rodape/>
            
       </>


    )
}