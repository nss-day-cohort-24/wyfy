import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Nav';
import MapContainer from './components/Map';
import LargeLogo from './components/LargeLogo';


class App extends Component {
  render() {
    return (
      <div>
      <NashData />

        <Navigation/>
        <MapContainer />
        <LargeLogo />

      </div>
    )
  }
}

export default App;
