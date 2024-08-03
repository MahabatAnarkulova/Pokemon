import React from "react";

const Card = ({ pokemon}) => {
    console.log(pokemon, '---item---');
  return (
    <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
      {pokemon.map(
        (item) => {
            return(
            <div key={item.id} className="card">
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
            </div>
          )}
      )}
    </div>
  );
};

export default Card;
