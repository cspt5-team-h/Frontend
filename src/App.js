import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Components
import GamePad from "./components/gamePad/GamePad";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Route path="/login" component={Login} exact />
      <GamePad />
    </div>
  );
}

export default App;
