// Code CoordinatesButton Component Here

import React, {Component} from 'react';

class CoordinatesButton extends Component {

    handleCoordinates = (event) => {
     const coords = [event.clientX, event.clientY];
     this.props.onReceiveCoordinates(coords);
    }

    render() {
        return (
          <button onClick={this.handleCoordinates}></button>
        )
    }

}

export default CoordinatesButton
