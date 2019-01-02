import React, { Component } from 'react';
import { Link } from "react-router-dom";



class JoinGame extends Component {
    render () {
        return (
            <div>
                Join Game page
                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}


export default JoinGame;