import React from 'react';
import './logos.css';
import logo from '../../images/wyfy-logo.svg';
import logo2 from '../../images/wyfy-logo2.svg';
import logo3 from '../../images/wyfy-logo3.svg';

let Logos = (props) => {
    return (
        <div>
            <img src={logo} className="logos" />
            <img src={logo2} className="logos" />
            <img src={logo3} className="logos" />
        </div>
    );
}

export default Logos;