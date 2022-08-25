import React from 'react'

const PhotoInfantil = ({ photo }) => {
  return (
    <figure>
      <div className="container-img"><img src={ photo.image } alt="" /></div>
      <div className="info">
        <span>{ photo.name }</span>
        <span>{ photo.price }</span>
      </div>
    </figure>
  )
}

export default PhotoInfantil
