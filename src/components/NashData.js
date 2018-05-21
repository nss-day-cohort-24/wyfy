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
         imgLink: "https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357",
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
            //IF statement that checks on whether or on Google Search data exists...
            if (data.results.length > 0) {
                //IF statements that assign rating to googleRating state if it exists...
                if (data.results[0].rating) {
                    component.setState({
                        googleRating: data.results[0].rating
                    }) 
                //...ELSE statement that returns state to default if rating data doesn't exists
                } else {
                    component.setState({
                        googleRating: "N/A"
                    })
                }
                //IF statements that assign "OPEN" or "CLOSE" to googleOpen state if it exists and based on true or false statement
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
                //...ELSE statement that returns state to default if open now data doesn't exists
                } else {
                    component.setState({
                        googleOpen: "N/A"
                    })
                }
                //IF statement that assign img link if it exists...
                if (data.results[0].photos){
                    component.setState({
                        imgLink: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.results[0].photos[0].photo_reference}&key=${API_KEY}`
                    })
                //...ELSE statement that returns state to default if img doesn't exists
                } else {
                    component.setState({
                        imgLink:"https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357"
                    })
                }
            //...ELSE statement that returns state to default if Google Search data doesn't exist
            } else {
                component.setState({
                    googleRating: "N/A",
                    googleOpen: "N/A",
                    imgLink:"https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357"
                })
            }
            //Set the general data to googleData state
            component.setState({
                googleData: data.results[0],
                click: name
            })
        }
        )
    }



    render() {
        console.log(this.state,"thisstate");
        if(this.state.DataIsLoaded === true){
        const wifiAddresses = this.state.data.map((item, index) => {
            //IF statement that checks on whether or not the one clicked is the one mapped
            if (this.state.click === item.site_name) {
                return (
                    <li key={index}><b>{item.site_name}</b> - {item.site_type}<br />{item.street_address}<br />{item.city}, {item.zip_code}<button onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>find place</button>
                    <br/>RATING: {this.state.googleRating}<br/>{this.state.googleOpen}<br/>
                    <img src={this.state.imgLink} alt="Image of Stuff"/>
                    </li>
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

            <div className="margin-top d-flex justify-content-left">
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