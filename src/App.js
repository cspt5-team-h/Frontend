import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Components
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Game from "./components/game/Game";
function  App() {
  

  return (
    <div>
      <Route path="/" component={Game} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />

    </div>
  );
}
export default App;

