import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import StartGame from './StartGame';
import JoinGame from './JoinGame';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className ="LogoHeader">
        Volleyball-buddies
      </h1>
        <header className="App-header">
        <Router>
          <div>
           

            <Route path="/" exact component={ Home } />
            <Route path="/CreateGame/" component={ StartGame } />
            <Route path="/JoinGame/" component={ JoinGame } />
          </div>
        </Router>
        </header>
      </div>
    );
  }
}

export default App;
