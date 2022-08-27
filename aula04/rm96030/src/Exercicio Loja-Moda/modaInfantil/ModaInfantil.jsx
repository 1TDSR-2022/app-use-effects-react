import React from "react";
import camisaInfantil from './img/transferir (15) (1).jfif'
import chuteiraInfantil from './img/transferir (14) (1).jfif'
import acessorioInfantil from './img/transferir (17) (1).jfif'
import calcaInfantil from './img/transferir (16) (1).jfif'
import './Css/ModaInfantil.css'
export default function ModaMasculina(){
    return(
        <div className="ContainerModaInfantil">
            <div className="itemMI">
                <img src={camisaInfantil} alt="" />
                <p>Camisas</p>
            </div>
            <div className="itemMI">
                <img src={chuteiraInfantil} alt="" />
                <p>Calçados</p>
            </div>
            <div className="itemMI">
                <img src={acessorioInfantil} alt="" />
                <p>Acessórios</p>
            </div>
            <div className="itemMI">
                <img src={calcaInfantil} alt="" />
                <p>Calças</p>
            </div>
           
        </div>
    )
}