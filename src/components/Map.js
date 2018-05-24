import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import '../App.css';

console.log('map here');

var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';


export class MapContainer extends Component {

  render() {
    console.log("mapprops",this.props);
    if(this.props.geolocated === true){
      return (
        <div className="map-flexbox">
        <Map
        google={this.props.google}
        center={{
          lat: this.props.currentLat,
          lng: this.props.currentLon
        }}
        zoom={13}
        className="main-map"


        >

        {
          this.props.data.map((item, index) => (
            <Marker
              key= {index}
              title={item.site_name}
              name={item.site_name}
              position={{lat: item.mapped_location.coordinates[1], lng: item.mapped_location.coordinates[0]}}
            />
          ))
        }

        {

            <Marker
              google={this.props.google}
              name="Current Location"
              position={{lat: this.props.currentLat, lng: this.props.currentLon}}
 />

        }



      </Map>
      
      </div>

        );
    }else{
    return (
    <div className="map-flexbox">
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 36.2088894,
          lng: -86.8120995
        }}
        zoom={10}
        className="main-map"
        >

        {
          this.props.data.map((item, index) => (
            <Marker
              key= {index}
              title={item.site_name}
              name={item.site_name}
              position={{lat: item.mapped_location.coordinates[1], lng: item.mapped_location.coordinates[0]}}
            />
          ))
        }

      </Map>
    </div>
    );
  }
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
