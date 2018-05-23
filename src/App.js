import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import NashData from './components/NashData';
import Geolocation from './components/Geolocation';
import BottomNav from './components/BottomNav';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      DataIsLoaded: false,
      searchName: "N/A"
    }
    this.searchName = this.searchName.bind(this);
  }

  componentDidMount(){
      var component = this

      fetch("https://data.nashville.gov/resource/terb-nbm6.json")
      .then((resp) => resp.json())
      .then(function(data) {
          component.setState({
              data: data,
              DataIsLoaded: true,
              searchName: "N/A"
          })
      }
      )
  }

  searchName(name){
    this.setState({
      searchName: name
    })
  }

  render() {
    return (
      <div>
        <Navigation search={this.searchName}/>
        <MapContainer data={this.state.data} />
        <Geolocation />
        <NashData search={this.state.searchName} data={this.state.data} loaded={this.state.DataIsLoaded}/>

        <BottomNav />
      </div>
    )
  }
}

export default App;
