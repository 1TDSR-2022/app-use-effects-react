import React from "react";
import Photo from "./Photo";

const data = [
	{
		"id": "1",
    "image": "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "terno",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "2",
    "image": "https://images.pexels.com/photos/3705262/pexels-photo-3705262.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Jaqueta",
    "price": 125.5,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "3",
    "image": "https://images.pexels.com/photos/3341231/pexels-photo-3341231.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Conjunto moletom",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "4",
    "image": "https://images.pexels.com/photos/2975401/pexels-photo-2975401.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Jaqueta Jeans",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "5",
    "image": "https://images.pexels.com/photos/5610951/pexels-photo-5610951.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Camiseta Caramelo",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "6",
    "image": "https://images.pexels.com/photos/4665668/pexels-photo-4665668.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "terno cinza",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "7",
    "image": "https://images.pexels.com/photos/9286135/pexels-photo-9286135.png?auto=compress&cs=tinysrgb&w=400",
    "name": "Corta vento",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "8",
    "image": "https://images.pexels.com/photos/11637556/pexels-photo-11637556.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Calça camuflada",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "9",
    "image": "https://images.pexels.com/photos/6764923/pexels-photo-6764923.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Terno de Camurça",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "10",
    "image": "https://images.pexels.com/photos/6764946/pexels-photo-6764946.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Colete Xadrez",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	}

]

const ModaMasculina = () => {
  return (
    <div className="container">
      { data.map( photo => <Photo key={ photo.id } photo={ photo } /> ) }
    </div>
  );
};

export default ModaMasculina;
