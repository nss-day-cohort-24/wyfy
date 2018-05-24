import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import '../App.css';


var API_KEY = 'AIzaSyBFArv5hJebxtu-iUHl_XQYlq4gmuf2Xeo';


export class MapContainer extends Component {

  constructor(props) {
    super(props);
   this.state = {
     searchNameState: false
    };
  }

  componentWillReceiveProps(){
    if(this.props.search !== "N/A"){
        this.setState({
            searchNameState: true
        })
    }
}

  render() {
    let markerMap;
    if (this.state.searchNameState) {
      markerMap = this.props.data.map((item, index) => {
        let lowerData = item.site_name.toLowerCase();
        let lowerSearch = this.props.search.toLowerCase();
        if (lowerData.includes(lowerSearch)){
          return(
            <Marker
            key= {index}
            title={item.site_name}
            name={item.site_name}
            position={{lat: item.mapped_location.coordinates[1], lng: item.mapped_location.coordinates[0]}}
            />
          )
        }
      })
    } else {
      markerMap = this.props.data.map((item, index) => {
        return(
          <Marker
          key= {index}
          title={item.site_name}
          name={item.site_name}
          position={{lat: item.mapped_location.coordinates[1], lng: item.mapped_location.coordinates[0]}}
          />
        )
      })
    }
    

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

        {markerMap}

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
      /*Initial center determines the first render of the map; After user clicks "find my location" button */
        initialCenter={{
          lat: 36.2088894,
          lng: -86.8120995
        }}
        zoom={10}
        className="main-map"
        >

        {/* {
          this.props.data.map((item, index) => (
            <Marker
              key= {index}
              title={item.site_name}
              name={item.site_name}
              position={{lat: item.mapped_location.coordinates[1], lng: item.mapped_location.coordinates[0]}}
            />
          ))
        } */}

        {markerMap}

      </Map>
    </div>
    );
  }
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
