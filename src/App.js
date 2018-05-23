import React, { Component } from 'react';
import './App.css';
import Navigation from './components/TopNav/TopNav';
import MapContainer from './components/Map';
import MoveNashData from './components/NashDataMover';
import BottomNav from './components/BottomNav';
import Reminder from './components/Reminder';
// import NashData from './components/NashData';



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
      <Reminder />
        <MapContainer data={this.state.data} />
        {/* <NashData search={this.state.searchName} data={this.state.data} loaded={this.state.DataIsLoaded}/> */}
        <MoveNashData search={this.state.searchName} data={this.state.data} loaded={this.state.DataIsLoaded} />
        <BottomNav />
      </div>
    )
  }
}

export default App;
