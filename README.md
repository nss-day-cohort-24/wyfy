![WyFy!](src/images/wyfy-logo4.png "Wyfy")
##  Your app to finding local free wifi hotspots based on your location or zipcode

  

###  How to - Install WyFy

1.  Clone the Wyfy Repo to your local server using `git clone https://github.com/nss-day-cohort-24/wyfy.git` in your terminal

1.  This app is compiled with React JS.  Inside your terminal, enter `npm install` 

1.  Once installed, enter `npm start` in the terminal, which will load the browser with Wyfy

  
---
###  How to - Use Wyfy

1.  On load of the mobile ready Wyfy application, either enter a zip code or choose to allow geo-location permission.

1.  Once your location is found, use the map or the list to find a free, Nashville wi-fi hotspot location.

1.  Find out detailed information about the location by clicking on it in the list view.

1.  To get directions to the selected location, click `"get directions"` or click the pinpoint in the map.

1.  Save your favorite locations to your local storage for easy retrieval by tapping the "heart" icon in the location details.

  ---

###  See More Documentation on Wyfy


1.  You may see the Nashville Software School UX Design Presentation and also find out more information about the students who developed and designed this product [here.](https://docs.google.com/presentation/d/1hzcP6mZ8VRRLMNkoPzEpVLCnHZTT8RJB3w7otR1ex0I/edit?usp=sharing)

1.  You may find the detailed Styleguidist Component Site by entering `npx styleguidist server` inside your terminal .
---

###  Challenge Statement
>  How might we offer users the ability to discover local wifi resources from Nashville’s Open Data Portal based on their current location or zip code.
  
---
###  Minimum Viable Product Goals
 1. Remove Default Favicon and Title :P
 2. Interactive Map with Davidson County Wifi Locations as Pins
 3. Search Results in Map/List Split View
 4. Expandable Location Details in List View: Including
	 * Location Name
	* Location Type
	* Address
	* Distance from User Location
	* Phone Number
	* Image	
	* Hours of Operation
	* Printers Available
	* Duration of Use (If Applicable)
	* Parking Information
	* Option to Rate and/or Comment
	* Save Favorite Locations (Local Storage)
5. Navigation to Selected Wifi Hotspot Location through Favorite Navigation App
6. Zip Code Prompt Should User Not Wish To Enable Location Services
7. View, Edit, and Delete Favorite Wifi Locations
8. Prompt to Turn On Wifi Once User Has Arrived at Destination
---
### Stretch Goals (v2)
1. Weighted Rating System (Quality + Quantity)
2. Location List View Ascending By Distance From User and Displayed
3. User Can Upload Images of Location
4. Include Private Businesses & Volunteers in Future Locations
---
## React Component Overview
### Landing
---
### Top Navigation
```javascript
render()  {
  return (
	<div>
		<Navbar className="d-flex justify-content-between navBar">
			<Logo4 />
			<InputGroup className="searchInputGroup col-6">
				<InputGroupAddon addonType="prepend">
					<img src={searchIcon}  alt="logo" className="icon"  />
				</InputGroupAddon>
				<Input className="searchBar"  type="search"  name="search"  id="search"  placeholder="Enter Zip..."  />
			</InputGroup>
		</Navbar>
	</div>
    );
  }
}
```
##### Logo
[WyFy!](src/images/wyfy-logo4.png "Wyfy" =150x)
##### Search
---
### Map

```javascript
import React, {Component} from  'react';
import {GoogleApiWrapper, Map, Marker} from  'google-maps-react';
import  '../App.css';

var API_KEY =  'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export  class  MapContainer  extends  Component {
	render()  {
	  return (
		<div className="map-flexbox">
		  <Map google={this.props.google}  zoom={14}  className="main-map">
			<Marker name={'Current location'}  />
		  </Map>
		</div>
		);
	}
}

export default  GoogleApiWrapper({
apiKey: (API_KEY)
})(MapContainer)
```
---
### Geolocation
```javascript
import { geolocated } from  'react-geolocated';

class  Geolocation  extends  React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
}
	getStuff(){
		!this.props.isGeolocationAvailable  ?  console.log("Browser does not support Geolocation")
		: !this.props.isGeolocationEnabled  ?  console.log("Geolocation is not enabled")
		: this.props.coords  ?  console.log("COORDS", this.props.coords, "LAT", this.props.coords.latitude, "LON", this.props.coords.longitude)
	}
	render()  {
		return (
			<button onClick={this.getStuff.bind(this)}>Get Location</button>
		)
	}
}
```
---
### Bottom Navigation
---
### Data
##### Imports
```javascript
import React, { Component } from  'react';
import  '../App.css';
import { Button } from  'reactstrap';
```
##### State
```javascript
class  NashData  extends  Component {  
	constructor(props)  {
		super(props);
			this.state = {
				data: null,
				DataIsLoaded: false,
				googleData: null,
				googleOpen:  "N/A",
				click: null,
				imgLink:  "https://vignette.wikia.nocookie.net/dumbway2sdie/images/5/5b/Kidneys2.gif/revision/latest?cb=20171219071357",
				googlePhone:"N/A",
				googleLoaded:false
			};
	}	
```
##### Fetch
```javascript
componentDidMount(){
	var component = this
	fetch("https://data.nashville.gov/resource/terb-nbm6.json")
	.then((resp)  => resp.json())
	.then(function(data) {
		component.setState({
		data: data,
		DataIsLoaded: true
		})
	}
	)
}
```
```javascript
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
                        imgLink: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.results[0].photos[0].photo_reference}&key=${API_KEY}`
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
```
##### Render 
```javascript
 render() {
        console.log(this.state,"thisstate");
        if(this.state.DataIsLoaded === true){
        const wifiAddresses = this.state.data.map((item, index) => {
            //IF statement that checks on whether or not the one clicked is the one mapped
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
    )

                return(
            <div className="margin-top d-flex justify-content-left">
                <ul>{wifiAddresses}</ul>
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
```
##### Export
```javascript
export default NashData;
```
___

All code and design of Wyfy© were developed by UX UI Design and Front-end Development Students, Cohort 24 2018.
