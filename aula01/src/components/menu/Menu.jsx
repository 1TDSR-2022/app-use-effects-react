import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/moda-feminina">ModaFeminina</Link>
          </li>
          <li>
            <Link to="/moda-masculina">ModaMasculina</Link>
          </li>
          <li>
            <Link to="/moda-infantil">ModaInfantil</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
