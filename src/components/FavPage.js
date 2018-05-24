import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap';

class FavPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteStorage: []
        }
    }

    componentDidMount(){
        //creates an empty array if local storage doesn't exist
        const parseLibrary = JSON.parse(localStorage.getItem('favorites'));
        if (!parseLibrary) {
            let faveItem = [];
            localStorage.setItem('favorites', JSON.stringify(faveItem));
            this.setState({
                favoriteStorage: faveItem
            })
        } else {
            let favoriteStorage = JSON.parse(localStorage.getItem('favorites'));
            this.setState({
                favoriteStorage: favoriteStorage
            })
        }
    }

    render() {
        let mapFave = this.state.favoriteStorage.map((item, index) => {
            if (item.phone){
                return (
                    <div>
                        <div>
                            <div>{item.name}</div>
                            <div>{item.openq}</div>
                            <div>{item.phone}</div>
                            <div>{item.address}</div>
                            <div>{item.cityName}</div>
                            <div>{item.zipCode}</div>
                            <div><img src={item.image} alt="blah blah"/></div>
                        </div>
                    </div>
                )
            }else {
                return(
                    <div>
                        <div>
                            <div>{item.name}</div>
                            <div>{item.openq}</div>
                            <div>{item.address}</div>
                            <div>{item.cityName}</div>
                            <div>{item.zipCode}</div>
                            <div><img src={item.image} alt="blah blah"/></div>
                        </div>
                    </div>
                )
            }
        })

        return(
            <div>
                <h3 className="fav-h3">WyFy Favorites</h3>
                {mapFave}
            </div>
        )
    }
}

export default FavPage;