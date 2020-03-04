import React, { Component } from 'react'
import Room from './Room'
export class Map extends Component {





    render() {
        return (
            <div>
                {this.props.rooms.map(room => (
                    <Room room={room}/>
                ))}
            </div>
        )
    }
}

export default Map
