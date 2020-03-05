import React, {useState, useEffect} from "react";
import axios from "axios";
// Components
import GamePad from "../gamePad/GamePad";

const Game = () => {
const [gameState, setGameState] = useState({});

useEffect(()=> {
axios.get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
  Authorization: localStorage.getItem("token")
})
.then((res)=> {
  console.log("data" , res.data)
})
} ,[] )

  return (
    <div>

      <GamePad />
    </div>
  );
};

export default Game;
