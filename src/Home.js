import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";



class Home extends Component {
    render () {
        return (
            <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/CreateGame/">Start a New Game</Link>
                </li>
                <li>
                  <Link to="/JoinGame/">Join Existing Game</Link>
                </li>
              </ul>
            </nav>
            </div>
        )
    }
}
    

export default Home;