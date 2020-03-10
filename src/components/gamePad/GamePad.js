import React from "react";
import "./gamePad.css";
import axios from "axios";

import triangle from "../../assets/icons/Triangle.svg";
// http://csp5.herokuapp.com/api/adv/move/
const GamePad = () => {
  const onClickHandler = e => {
    // e.preventDefault()
    axios.post(
      "http://csp5.herokuapp.com/api/adv/move/",
      { direction: e },
      {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`
        }
      }
    );
  };

  return (
    <div className="gamepad-container">
      <button className="control" onClick={e => onClickHandler("n")}>
        <img src={triangle} alt="move north control" />
      </button>

      <div className="gamepad-we-cardinal-container">
        <button
          className="control control-left"
          onClick={e => onClickHandler("w")}
        >
          <img src={triangle} alt="move west control" />
        </button>
        <button
          className="control control-right"
          onClick={e => onClickHandler("e")}
        >
          <img src={triangle} alt="move east control" />
        </button>
      </div>

      <button
        className="control control-down"
        onClick={e => onClickHandler("s")}
      >
        <img src={triangle} alt="move south control" />
      </button>
    </div>
  );
};

export default GamePad;
