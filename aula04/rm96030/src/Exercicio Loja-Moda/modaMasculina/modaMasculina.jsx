import React from "react";
import camisaMasculina from './img/transferir (8) (1).jfif'
import chuteiraMasculina from './img/transferir (6) (1).jfif'
import acessorioMasculino from './img/transferir (9) (1).jfif'
import calcaMasculino from './img/transferir (7) (1).jfif'
import './Css/ModaMasculina.css'
export default function ModaMasculina(){
    return(
        <div className="ContainerModaMasculina">
            <div className="itemMM">
                <img src={camisaMasculina} alt="" />
                <p>Camisas</p>
            </div>
            <div className="itemMM">
                <img src={chuteiraMasculina} alt="" />
                <p>Calçados</p>
            </div>
            <div className="itemMM">
                <img src={acessorioMasculino} alt="" />
                <p>Acessórios</p>
            </div>
            <div className="itemMM">
                <img src={calcaMasculino} alt="" />
                <p>Calças</p>
            </div>
           
        </div>
    )
}