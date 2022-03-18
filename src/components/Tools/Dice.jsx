import React from "react";

function Dice(props) {
    
  return (
    <>
        <i className={`dice fas fa-dice-${props.side}`}></i>
    </>
  );
}

export default Dice;
