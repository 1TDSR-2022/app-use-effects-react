import React from 'react'

const PhotosHome = ({ photo }) => {
  return (
    <div>
      <figure>
        <div className="container-img">
          <img src={ photo.image } alt={ photo.name} />
        </div>
      </figure>
    </div>
  )
}

export default PhotosHome
