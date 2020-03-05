import React, { useState, useEffect } from "react";
import axios from "axios";
import GamePad from "../gamePad/GamePad";

const GamePad = () => {
  const [gameState, setGameState] = useState({});
  useEffect(() => {
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
        Authorization: localStorage.getItem("token")
      })
      .then(res => {});
  }, []);
  return (
    <div>
      <GamePad />
    </div>
  );
};
export default Game;
