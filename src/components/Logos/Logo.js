import React from 'react';
import './logos.css';
import logo from '../../images/wyfy-logo.svg';

let Logo = (props) => {
    return (
        <div>
            <img src={logo} alt="logo" className="logo" />
        </div>
    );
}

export default Logo;