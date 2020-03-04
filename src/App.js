import React from "react";
import "./App.css";

// Components
import GamePad from "./components/gamePad/GamePad";
import Chat from "./components/chat/chat";
function App() {
  return (
    <div>
      <GamePad />
      <Chat />
    </div>
  );
}

export default App;
