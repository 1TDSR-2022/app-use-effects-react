import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/home/Home"
import Menu from "./components/menu/Menu"
import ModaFem from './components/modaFem/ModaFem'
import ModaMasc from './components/modaMasc/ModaMasc'
import ModaInf from './components/modaInf/ModaInf'
import Rodape from './components/rodape/Rodape'
import Sobre from './components/sobre/Sobre'

export default function App(){

    const corpo ={
        backgroundColor: '#FF7F50',
        borderRadius: '10px',
        padding: '10px'
    }


    return(
        <BrowserRouter>
        <div style={corpo}>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/modaFem" element={<ModaFem/>}/>
                <Route path="/modaMasc" element={<ModaMasc/>}/>
                <Route path="/modaInf" element={<ModaInf/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
            <Rodape/>
        </div>
        </BrowserRouter>
    )
    
}
