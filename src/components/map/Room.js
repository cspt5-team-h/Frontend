import React, { Component } from "react";
import "./map.css";
export class Room extends Component {
  render() {
    return (
      <div className="room">
        <h1>Current Room</h1>
        {this.props.room.title}

        <p>Description</p>
        {this.props.room.description}
      </div>
    );
  }
}

export default Room;
