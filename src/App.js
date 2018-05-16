import React, { Component } from 'react';
import './App.css';
import Navigation from './Nav';
import MapContainer from './Map';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <MapContainer />
      </div>
    );
  }
}

export default App;
