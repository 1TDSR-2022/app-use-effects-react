import React from 'react'
import PhotoInfantil from './PhotoInfantil'

const dados = [
	{
		"id": "1",
    "image": "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "c",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "2",
    "image": "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "c",
    "price": 125.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "3",
    "image": "https://images.pexels.com/photos/1620826/pexels-photo-1620826.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "c",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "4",
    "image": "https://images.pexels.com/photos/1650281/pexels-photo-1650281.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "Pijama",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "5",
    "image": "https://images.pexels.com/photos/1493108/pexels-photo-1493108.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "C",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "6",
    "image": "https://images.pexels.com/photos/2995309/pexels-photo-2995309.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "C",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "7",
    "image": "https://images.pexels.com/photos/39295/girl-young-blue-eyes-eyes-39295.jpeg?auto=compress&cs=tinysrgb&w=16000",
    "name": "Coturno",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "8",
    "image": "https://images.pexels.com/photos/1765423/pexels-photo-1765423.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "Vestido Xadrez",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "9",
    "image": "https://images.pexels.com/photos/3394406/pexels-photo-3394406.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "Jaqueta Jeans",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "10",
    "image": "https://images.pexels.com/photos/8082817/pexels-photo-8082817.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "C",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	}

]

const ModaInfantil = () => {
  return (
    <div className='container'>
      { dados.map( photo => <PhotoInfantil key={ photo.id } photo={ photo } /> )}
    </div>
  )
}

export default ModaInfantil
