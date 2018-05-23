import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import NashData from './components/NashData';
import BottomNav from './components/BottomNav';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <MapContainer/>
        <NashData />
        <BottomNav />
      </div>
    )
  }
}

export default App;
