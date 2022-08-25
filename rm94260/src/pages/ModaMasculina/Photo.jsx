import React from "react";

const Photo = ({ photo }) => {
  const info = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
  };

  const nome = {
    textTransform: "capitalize",
  };

  return (
    <figure>
      <div className="container-img">
        <img src={photo.image} alt={photo.name} />
        <span className="plus">{ photo.description }</span>
      </div>
      <div style={info}>
        <span style={nome}>{photo.name}</span> <span>R$ {photo.price}</span>
      </div>
    </figure>
  );
};

export default Photo;
