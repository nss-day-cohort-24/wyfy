import React, { Component } from 'react';
import '../App.css';

var API_KEY = 'AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY';


class NashData extends Component {

    constructor(props) {
        super(props);
       this.state = {
         data: null,
         DataIsLoaded: false,
         googleData: null,
         googleRating: "N/A",
         googleOpen: "N/A",
         click: null,
       };
    }

    componentDidMount(){
        var component = this

        fetch("https://data.nashville.gov/resource/terb-nbm6.json")
        .then((resp) => resp.json())
        .then(function(data) {
            component.setState({
                data: data,
                DataIsLoaded: true
            })
        }
        )
    }
    // Ideally, I will be able to run this function when list item is clicked, and it will drop down with more details of the company.
    grabGoogleData(latitude,longitude,name){
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let newName = name.replace(/\s/g, '');
        var component = this
        fetch(proxyUrl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY&location=${latitude},${longitude}&radius=2000&keyword=${newName}`)
        .then((resp) => resp.json())
        .then(function(data) {
            if (data.results.length > 0) {
                if (data.results[0].rating) {
                    component.setState({
                        googleRating: data.results[0].rating
                    }) 
                } else {
                    component.setState({
                        googleRating: "N/A"
                    })
                }

                if (data.results[0].opening_hours) {
                    if (data.results[0].opening_hours.open_now) {
                        component.setState({
                            googleOpen: "OPEN"
                        })
                    } else if (!data.results[0].opening_hours.open_now) {
                        component.setState({
                            googleOpen: "CLOSE"
                        })
                    }
                } else {
                    component.setState({
                        googleOpen: "N/A"
                    })
                }
            } else {
                component.setState({
                    googleRating: "N/A",
                    googleOpen: "N/A"
                })
            }
            component.setState({
                googleData: data.results[0],
                click: name
            })
        }
        )
    }



    render() {
        console.log(this.state,"thisstate");
        let openState = "N/A";
        if(this.state.DataIsLoaded === true){
        const wifiAddresses = this.state.data.map((item, index) => {
            if (this.state.click === item.site_name) {
                return (
                    <li key={index}><b>{item.site_name}</b> - {item.site_type}<br />{item.street_address}<br />{item.city}, {item.zip_code}<button onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>find place</button>
                    <br/>RATING: {this.state.googleRating}<br/>{this.state.googleOpen}</li>
                )
            }
            else {
                return (
                    <li key={index}><b>{item.site_name}</b> - {item.site_type}<br />{item.street_address}<br />{item.city}, {item.zip_code}<button onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>find place</button></li>
                )
            }
        }
    )

               return(

            <div className="margin-top">
            <ul>
            {wifiAddresses}
            </ul>

            </div>

        )

    }else{

        return(
        <div>
        Loading...
        </div>
        )
    }
    }

}




export default NashData;