import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import NashData from './components/NashData';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <MapContainer/>
        <NashData />

      </div>
    )
  }
}

export default App;
