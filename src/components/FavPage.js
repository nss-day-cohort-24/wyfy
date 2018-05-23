import React, { Component } from 'react';

class FavPage extends Component {
    render() {
        return(
            <div>
                <h3 className="fav-h3">WyFy Favorites</h3>
                <ul>
                    <li>this will list the favorites from local storage</li>
                </ul>
            </div>
        )
    }
}

export default FavPage;