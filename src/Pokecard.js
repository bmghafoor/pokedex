import React from "react";
import "./pokecard.css";

const Pokecard = ({ name, id, type, xp }) => {
  return (
    <div className="card">
      <h2 style={{ color: "blue" }}>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      ></img>
      <div className="container">
        <h2>Type: {type}</h2>
        <h2>EXP: {xp}</h2>
      </div>
    </div>
  );
};

export default Pokecard;
