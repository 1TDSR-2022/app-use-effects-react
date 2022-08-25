import React from 'react'

const Photo = ({ photo }) => {
  return (
    <figure>
      <div className="container-img">
        <img src={ photo.image } alt={ photo.name } />
        <span className="plus">{ photo.description }</span>
      </div>

      <div className="info">
        <span>{ photo.name }</span><span>{ photo.price }</span>
      </div>
    </figure>
  )
}

export default Photo
