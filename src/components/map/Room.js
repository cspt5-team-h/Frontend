import React, { Component } from 'react'
import './map.css';
export class Room extends Component {
    render() {
        return (
            <div className='room'>
               {this.props.room.title} 
               {this.props.room.description}
            </div>
        )
    }
}

export default Room
