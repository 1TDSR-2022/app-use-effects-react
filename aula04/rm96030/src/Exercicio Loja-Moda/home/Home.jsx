import React from "react";

import Psg from './img/PSG.jpg'
import BarcaWoman from './img/transferir (5).jfif'
import LiverpoolMan from './img/Camisa-titular-do-Liverpool-FC-2022-2023-Nike-kit-f (1).jpg'
import NorwichKids from './img/camisa-de-futebol-criancas-meninos-definir-uniformes-de-futebol-infantil-camisas-de-futebol-treinamento-manga-curta-ternos-do-es (1).jpg'
import './Css/Home.css'
export default function Home(){
    return(

        <div className="container">

            <div className="containerOne">
                <img src={Psg} alt="" />
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sit debitis facilis suscipit perferendis provident quos minus omnis fugit voluptatum?</p>
                    <input type="button" id="button" value={'Saiba mais'} />
                </div>
            </div>

           <div className="containerNew">
                <div className="item">
                    <img src={BarcaWoman} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque.</p>
                </div>
                <div className="item">
                    <img src={LiverpoolMan}alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque.</p>
                </div>
                <div className="item">
                    <img src={NorwichKids} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque.</p>
                </div>
           </div>

        </div>
       
    )
}