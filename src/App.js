import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import MoveNashData from './components/NashDataMover';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <MapContainer/>
        <MoveNashData />

      </div>
    )
  }
}

export default App;
