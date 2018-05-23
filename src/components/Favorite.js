import React, { Component } from 'react';

import Fav from '../images/wyfy-favorite.svg';

class FavoriteIcon extends Component {

    faveStart(){
        this.props.fave(this.props.index, this.props.phone);
    }

    render() {
        return(
            <input onClick={this.faveStart.bind(this)} src={Fav} type="image" alt="favorite this wyfy item" title="favorite this wifi icon" className="fav-icon"/>
        )
    }
}


export default FavoriteIcon;