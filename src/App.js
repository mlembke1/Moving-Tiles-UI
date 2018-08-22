import React, { Component } from 'react';
import TileList from './components/tile-list/tile-list-component'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TileList />
      </div>
    );
  }
}

export default App;
