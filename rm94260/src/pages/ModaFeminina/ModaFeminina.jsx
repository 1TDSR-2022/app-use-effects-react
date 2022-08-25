import React from 'react'
import Photo from './Photo'

const data = [
	{
		"id": "1",
    "image": "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 25.50
	},
	{
		"id": "2",
    "image": "https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 125.50
	},
	{
		"id": "3",
    "image": "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "c",
    "price": 25.50
	},
	{
		"id": "4",
    "image": "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Pijama",
    "price": 25.50
	},
	{
		"id": "5",
    "image": "https://images.pexels.com/photos/1004642/pexels-photo-1004642.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "C",
    "price": 25.50
	},
	{
		"id": "6",
    "image": "https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "C",
    "price": 25.50
	},
	{
		"id": "7",
    "image": "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Coturno",
    "price": 25.50
	},
	{
		"id": "8",
    "image": "https://images.pexels.com/photos/859192/pexels-photo-859192.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Vestido Xadrez",
    "price": 25.50
	},
	{
		"id": "9",
    "image": "https://images.pexels.com/photos/1107971/pexels-photo-1107971.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Jaqueta Jeans",
    "price": 25.50
	},
	{
		"id": "10",
    "image": "https://images.pexels.com/photos/925361/pexels-photo-925361.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "C",
    "price": 25.50
	}

]

const ModaFeminina = () => {
  return (
    <div className='container'>
      { data.map( photo => <Photo key={ photo.id } photo={ photo } /> ) }
    </div>
  )
}

export default ModaFeminina
