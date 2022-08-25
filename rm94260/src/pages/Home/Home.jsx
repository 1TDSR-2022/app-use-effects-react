import React from 'react'
import PhotosHome from './PhotosHome'

const data = [
  {
		"id": "1",
    "image": "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "2",
    "image": "https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 125.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "3",
    "image": "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
	{
		"id": "4",
    "image": "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
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
    "image": "https://images.pexels.com/photos/8082817/pexels-photo-8082817.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "C",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit."
	},
  {
		"id": "9",
    "image": "https://images.pexels.com/photos/4665668/pexels-photo-4665668.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "terno cinza",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "10",
    "image": "https://images.pexels.com/photos/10675472/pexels-photo-10675472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "name": "Corta vento",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "11",
    "image": "https://images.pexels.com/photos/11637556/pexels-photo-11637556.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Calça camuflada",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
	{
		"id": "12",
    "image": "https://images.pexels.com/photos/6764923/pexels-photo-6764923.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Terno de Camurça",
    "price": 25.50,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum rerum exercitationem debitis odit, velit, totam necessitatibus ad cum doloribus enim perspiciatis. Iure, incidunt odit!"
	},
]

const Home = () => {

  const feed = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '1rem',
    justifyItems: 'center',
  }

  return (
    <div style={ feed }>
      { data.map( photo => <PhotosHome key={ photo.id } photo={ photo } /> ) }
    </div>
  )
}

export default Home
