import React, { Component } from 'react';
import { Link } from "react-router-dom";



class StartGame extends Component {
    render () {
        return (
            <div>
                Start Game page
                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}


export default StartGame;