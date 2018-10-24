import React, { Component } from 'react';
import pokeball from './pokeball.PNG';
import './Home.css';
import poke from './poke.png';



class App extends Component {
  render() {
    return (
      
      <div className="App">
      <img src={poke} className="App-poke" alt="poke" />

        <header className="App-header">         
          <img src={pokeball} className="App-pokeball" alt="pokeball" />

        </header>
      </div>
    );
  }
}

export default App