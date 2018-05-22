import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import NashData from './components/NashData';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      DataIsLoaded: false
    }
  }

  componentDidMount(){
      var component = this

      fetch("https://data.nashville.gov/resource/terb-nbm6.json")
      .then((resp) => resp.json())
      .then(function(data) {
          component.setState({
              data: data,
              DataIsLoaded: true
          })
      }
      )
  }

  render() {
    return (
      <div>
        <Navigation/>
        <MapContainer data={this.state.data} />
        <NashData data={this.state.data} loaded={this.state.DataIsLoaded}/>

      </div>
    )
  }
}

export default App;
