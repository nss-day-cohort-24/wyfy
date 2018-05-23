import React, { Component } from 'react';
import FavoriteIcon from './Favorite';
import '../App.css';
import { Button } from 'reactstrap';


var API_KEY = 'AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY';


class NashData extends Component {

    constructor(props) {
        super(props);
       this.state = {
         // data: this.props.data,
         // DataIsLoaded: this.props.loaded,
         googleData: null,
         googleOpen: "N/A",
         click: null,
         imgLink: "https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357",
         googlePhone:"N/A",
         googleLoaded:false,
         searchNameState: false
       };
    }

    // componentDidMount(){
    //     var component = this
    //
    //     fetch("https://data.nashville.gov/resource/terb-nbm6.json")
    //     .then((resp) => resp.json())
    //     .then(function(data) {
    //         component.setState({
    //             data: data,
    //             DataIsLoaded: true
    //         })
    //     }
    //     )
    // }

    componentWillReceiveProps(){
        if(this.props.search !== "N/A"){
            this.setState({
                searchNameState: true
            })
        }
    }

    // Ideally, I will be able to run this function when list item is clicked, and it will drop down with more details of the company.
    grabGoogleData(latitude,longitude,name,street_address,city,zip_code){
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let newName = name.replace(/\s/g, '');
        var component = this
        console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY&location=${latitude},${longitude}&radius=2000&keyword=${newName}`)
        fetch(proxyUrl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY&location=${latitude},${longitude}&radius=2000&keyword=${newName}`)
        .then((resp) => resp.json())
        .then(function(data) {
            //IF statement that checks on whether or on Google Search data exists...
            if (data.results.length > 0) {
                //IF statements that assign "OPEN" or "CLOSE" to googleOpen state if it exists and based on true or false statement
                if (data.results[0].opening_hours) {
                    if (data.results[0].opening_hours.open_now) {
                        component.setState({
                            googleOpen: "OPEN"
                        })
                    } else if (!data.results[0].opening_hours.open_now) {
                        component.setState({
                            googleOpen: "CLOSED"
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
                        imgLink: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&photoreference=${data.results[0].photos[0].photo_reference}&key=${API_KEY}`
                    })
                //...ELSE statement that returns state to default if img doesn't exists
                } else {
                    component.setState({
                        imgLink:"https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357"
                    })
                }
                console.log(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${data.results[0].place_id}&key=${API_KEY}`)
                fetch(proxyUrl + `https://maps.googleapis.com/maps/api/place/details/json?placeid=${data.results[0].place_id}&key=${API_KEY}`)
                .then((resp) => resp.json())
                .then(function(data) {

                    console.log("Advanced Data",data);
                    component.setState({
                        googlePhone: data.result.formatted_phone_number,
                        googleLoaded: true})
                })
            //...ELSE statement that returns state to default if Google Search data doesn't exist
            }
            else {
                component.setState({
                    googleOpen: "N/A",
                    googlePhone: "N/A",
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
        if(this.props.loaded === true && this.state.searchNameState === false){
        const wifiAddresses = this.props.data.map((item, index) => {
            //IF statement that checks on whether or not the one clicked is the one mapped


            if(this.state.click === item.site_name && this.state.googleLoaded === true){
                return (
                    <li key={index}><b>{item.site_name}</b><FavoriteIcon /><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button>
                    <br/>{this.state.googleOpen}<br />Phone: {this.state.googlePhone}<br />
                    {item.street_address}<br />{item.city}, {item.zip_code}<br />
                    <center><img src={this.state.imgLink} alt="Location"/></center>
                    </li>

                )

            }
            if (this.state.click === item.site_name) {
                return (
                    <li key={index}><b>{item.site_name}</b><FavoriteIcon /><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button>
                    <br/>{this.state.googleOpen}<br/>
                    {item.street_address}<br />{item.city}, {item.zip_code}<br />
                    <center><img src={this.state.imgLink} alt="Location"/></center>
                    </li>
                )
            }
            else {
                return (
                    <li key={index}><b>{item.site_name}</b><FavoriteIcon /><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button></li>
                )
            }
        }
    )

               return(

            <div className="listDiv margin-top d-flex justify-content-left">
            <ul>
            {wifiAddresses}
            </ul>

            </div>

        )

    } else if (this.state.searchNameState) {
        const wifiAddresses = this.props.data.map((item, index) => {
            let lowerData = item.site_name.toLowerCase();
            let lowerSearch = this.props.search.toLowerCase();
            if (lowerData.includes(lowerSearch)) {
                if(this.state.click === item.site_name && this.state.googleLoaded === true){
                    return (
                        <li key={index}><b>{item.site_name}</b><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button>
                        <br/>{this.state.googleOpen}<br />Phone: {this.state.googlePhone}<br />
                        {item.street_address}<br />{item.city}, {item.zip_code}<br />
                        <img src={this.state.imgLink} alt="Location"/>
                        </li>
    
                    )
    
                }
                if (this.state.click === item.site_name) {
                    return (
                        <li key={index}><b>{item.site_name}</b><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button>
                        <br/>{this.state.googleOpen}<br/>
                        {item.street_address}<br />{item.city}, {item.zip_code}<br />
                        <img src={this.state.imgLink} alt="Location"/>
                        </li>
                    )
                }
                else {
                    return (
                        <li key={index}><b>{item.site_name}</b><br /><Button color="success" onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>More...</Button></li>
                    )
                }
            }
        })
        return (
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
