import React from 'react'

import Home from './componets/Home'
import Produtos from './componets/Produtos'
import Servicos from './componets/Servicos'

export default function App(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/servicos" element={<Servicos/>} />
            </Routes>
        </BrowserRouter>
    )
}