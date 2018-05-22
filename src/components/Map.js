import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import '../App.css';

console.log('map here');

var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';

export class MapContainer extends Component {
  render() {
    return (
    <div className="map-flexbox">
      <Map google={this.props.google} data={this.props.data} zoom={14} className="main-map">
        <Marker name={'Current location'} />

        this.props.data.map(index) {
          <Marker
            title={this.props.data.site_name}
            name={this.props.data.site_name}
            position={this.props.latlon}
          />
        }

        <Marker
          title={'Adams Kart Track'}
          name={'Adams Kart Track'}
          position={{lat: 34.0082, lng: -117.3828}}
        />
      </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
