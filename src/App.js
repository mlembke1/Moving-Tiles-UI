import React, { Component } from 'react';
import TileListTop from './components/tile-list-top/tile-list-top-component'
import TileListBottom from './components/tile-list-bottom/tile-list-bottom-component'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TileListTop />
        <TileListBottom />
      </div>
    );
  }
}

export default App;
