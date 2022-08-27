import React from "react";
import camisaFeminina from './img/transferir (10) (1).jfif'
import chuteiraFeminina from './img/transferir (12) (1).jfif'
import acessorioFeminina from './img/transferir (13) (1).jfif'
import calcaFeminino from './img/transferir (11) (1).jfif'
import './Css/ModaFeminina.css'

export default function ModaMFeminina(){
    return(
        <div className="ContainerModaFeminina">
            <div className="itemMF">
                <img src={camisaFeminina} alt="" />
                <p>Camisas</p>
            </div>
            <div className="itemMF">
                <img src={chuteiraFeminina} alt="" />
                <p>Calçados</p>
            </div>
            <div className="itemMF">
                <img src={acessorioFeminina} alt="" />
                <p>Acessórios</p>
            </div>
            <div className="itemMF">
                <img src={calcaFeminino} alt="" />
                <p>Calças</p>
            </div>
           
        </div>
    )
}