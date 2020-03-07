import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import GamePad from "../gamePad/GamePad";
import Map from "../map/Map";
import Chat from '../chat/chat'
import "./game.css";

const Game = () => {
  const [gameState, setGameState] = useState({});
  const [rooms, setRooms] = useState([
    {
      model: "adventure.room",
      pk: 1,
      fields: {
        title: "Outside Cave Entrance",
        description: "North of you, the cave mount beckons",
        n_to: 2,
        s_to: 0,
        e_to: 0,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 3,
      fields: {
        title: "Grand Overlook",
        description:
          "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
        n_to: 0,
        s_to: 2,
        e_to: 0,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 2,
      fields: {
        title: "Foyer",
        description:
          "Dim light filters in from the south. Dusty\npassages run north and east.",
        n_to: 3,
        s_to: 1,
        e_to: 4,
        w_to: 0
      }
    },
    {
      model: "adventure.room",
      pk: 4,
      fields: {
        title: "Narrow Passage",
        description:
          "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
        n_to: 5,
        s_to: 0,
        e_to: 0,
        w_to: 2
      }
    },
    {
      model: "adventure.room",
      pk: 5,
      fields: {
        title: "Treasure Chamber",
        description:
          "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
        n_to: 0,
        s_to: 4,
        e_to: 0,
        w_to: 0
      }
    }
  ]);

  useEffect(() => {
    axios
      .get("http://csp5.herokuapp.com/api/adv/init/", {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`
        }
      })
      .then(res =>
        setGameState({
          ...gameState,
          ...res.data
        })
      );
  }, [gameState]);
  console.log(gameState);
  return (
    <div className="Game">

      <GamePad gameInfo={gameState} />
      <Map mapRooms={rooms} gameInfo={gameState} style={{ backgroundColor: 'yellow'}} />
      <Chat style={{"color": 'red'}}/>
    </div>
  );
};

export default Game;
