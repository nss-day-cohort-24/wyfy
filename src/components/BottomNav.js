import React, { Component } from 'react';
import './bottomNav.css';
// import Top from '../images/wyfy-top.svg';
import Fav from '../images/wyfy-favs.svg';
// import Filter from '../images/wyfy-filter.svg';
import Geolocation from './Geolocation'

class BottomNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            geolocated:false,
            latitude: null,
            longitude:null
        }

        this.getLocation = this.getLocation.bind(this);

      }

      getLocation(coords){
        this.setState({
          geolocated:true,
          latitude: coords.latitude,
          longitude:coords.longitude
        })
        this.props.getLocation(coords);
    }




    render() {
        return(
            <div className="footer absoluteFooter">
                <center>
                <img src={Fav} alt="search icon" className="icon2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Geolocation getLocation={this.getLocation}/>
                </center>

            </div>
        )
    }
}

export default BottomNav;