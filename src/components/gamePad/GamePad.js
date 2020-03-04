import React from "react";
import "./gamePad.css";

import triangle from "../../assets/icons/Triangle.svg";

const GamePad = () => {
  return (
    <div className="gamepad-container">
      <button className="control">
        <img src={triangle} />
      </button>

      <div className="gamepad-we-cardinal-container">
        <button className="control control-left">
          <img src={triangle} />
        </button>
        <button className="control control-right">
          <img src={triangle} />
        </button>
      </div>

      <button className="control control-down">
        <img src={triangle} />
      </button>
    </div>
  );
};

export default GamePad;
