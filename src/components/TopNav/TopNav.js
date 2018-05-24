import React from 'react';
import Logo4 from '../Logos/Logo4';
import './topnav.css';
import searchIcon from '../../images/wyfy-search.svg';
// import Geolocation from '../Geolocation';
// import currentButton from '../../images/current-loc.png';
import {
  Navbar,
  Input
 } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  getLocation(coords){
    this.setState({
      geolocated:true,
      latitude: coords.latitude,
      longitude:coords.longitude
    })
    this.props.getLocation(coords);
  }

  search(event){
    this.props.search(document.getElementById("search").value);
  }

  render() {
    return (
      <div>
        <Navbar className="d-flex justify-content-between navBar">         
          <Logo4 />
          <div className="searchDiv d-flex align-items-center">
            <img src={searchIcon} className="icon"/>
            <Input className="searchBar" type="search" name="search" id="search" placeholder="Search Location Name" onKeyUp={this.search.bind(this)}/>
          </div>           
        </Navbar>
      </div>
    );
  }
}