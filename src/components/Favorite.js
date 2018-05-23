import React, { Component } from 'react';

import Fav from '../images/wyfy-favorite.svg';

class FavoriteIcon extends Component {
    render() {
        return(
            <img src={Fav} type="submit" alt="favorite this wyfy item" title="favorite this wifi icon" className="fav-icon"/>
        )
    }
}


export default FavoriteIcon;