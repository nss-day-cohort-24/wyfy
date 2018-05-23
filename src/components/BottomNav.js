import React, { Component } from 'react';
import './TopNav/topnav.css';
import Top from '../images/wyfy-rate.svg';
import Fav from '../images/fav-icon.svg';
import Filter from '../images/wyfy-filter.svg';

class BottomNav extends Component {
    render() {
        return(
            <div className="footer navBar">
                <center><img src={Top} alt="top rated icon" className="icon2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Fav} alt="search icon" className="icon2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Filter} alt="top rated icon" className="icon2"/></center>
            </div>
        )
    }
}

export default BottomNav;