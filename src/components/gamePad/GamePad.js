import React from "react";
import "./gamePad.css";

import triangle from "../../assets/icons/Triangle.svg";

const GamePad = () => {
  return (
    <div className="gamepad-container">
      <button className="control">
        <img src={triangle} alt="move north control" />
      </button>

      <div className="gamepad-we-cardinal-container">
        <button className="control control-left">
          <img src={triangle} alt="move west control" />
        </button>
        <button className="control control-right">
          <img src={triangle} alt="move east control" />
        </button>
      </div>

      <button className="control control-down">
        <img src={triangle} alt="move south control" />
      </button>
    </div>
  );
};

export default GamePad;
