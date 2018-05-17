import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Nav';
import MapContainer from './components/Map';
import LargeLogo from './components/LargeLogo';
import NashData from './components/NashData';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <NashData />
        <MapContainer />
        <LargeLogo />

      </div>
    )
  }
}

export default App;
