import React from 'react';
import { geolocated } from 'react-geolocated';
 
class Geolocation extends React.Component {
    constructor(props){
        super(props);
        // this.getStuff.bind(this);
    }



    getStuff(){
        console.log("get Stuff TEST", this.props);
        !this.props.isGeolocationAvailable ? console.log("Browser does not support Geolocation") 
        : !this.props.isGeolocationEnabled ? console.log("Geolocation is not enabled")
        : this.props.coords ? console.log("COORDS", this.props.coords, "LAT", this.props.coords.latitude, "LON", this.props.coords.longitude)
        : console.log("GETTING LOCATION?", this.props.coords);
    }

    render() {

        return (
            <button onClick={this.getStuff.bind(this)}>Get Location</button>
        )
    }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: false
})(Geolocation);