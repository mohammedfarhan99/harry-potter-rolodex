import React from "react";
import "./card.component.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="character" src={props.character.image} />
      <h2 key={props.character.actor}>{props.character.name}</h2>
      <h3>{props.character.actor}</h3>
      <h3 className='ancestry'>{props.character.ancestry}</h3>
    </div>
  );
};
