import React from "react";

const Footer = () => {
  const footer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    background: '#444',
    color: '#fff',
  };
  return (
    <footer style={footer}>
      <p>&copy; Loja de Moda | Desenvolvido por João Pedro</p>
    </footer>
  );
};

export default Footer;
