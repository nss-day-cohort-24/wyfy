import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import '../App.css';

console.log('map here');

var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';

const style ={
  width: '100%',
  height: '50vh'
}


export class MapContainer extends Component {

  render() {
    return (
    <div>
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 36.2088894,
          lng: -86.8120995
        }}
        style={style}
        zoom={10}
        // className="main-map"
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

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
