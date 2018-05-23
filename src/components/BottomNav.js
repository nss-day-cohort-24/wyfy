import React, { Component } from 'react';
import Top from '../images/wyfy-rate.svg';
import Search from '../images/wyfy-search.svg';

class BottomNav extends Component {
    render() {
        return(
            <div className="footer">
                <center><img src={Top} alt="top rated icon" className="bottom-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Search} alt="search icon" className="bottom-icons"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Top} alt="top rated icon" className="bottom-icons"/></center>
            </div>
        )
    }
}

export default BottomNav;