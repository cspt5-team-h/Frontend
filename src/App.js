import React from "react";
import "./App.css";
import Map from './components/map/Map'
// Components
import GamePad from "./components/gamePad/GamePad";

class App extends React.Component() {


  constructor() {
    super();
    this.state = {
      rooms: [],
    
    };
  }

  componentDidMount() {
    this.getRooms('https://lambda-mud-test.herokuapp.com/api/adv/rooms');
  }

  getRooms = URL => {
  
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ rooms: data.rooms });
      })
      .catch(err => {
        throw new Error(err);
      });
  };






render(){

  return (
    <div>
      <GamePad />
      <Map rooms={this.state.rooms}/>
    </div>
  );
  }
}

export default App;
