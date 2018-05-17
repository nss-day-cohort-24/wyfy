import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

console.log('map here');

var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)