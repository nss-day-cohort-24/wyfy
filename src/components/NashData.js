import React, { Component } from 'react';




class NashData extends Component {

    constructor(props) {
        super(props);
       this.state = {
         data: null,
         dataIsLoaded:false
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
    render() {
        console.log(this.state,"thisstate");
        if(this.state.DataIsLoaded === true){
        const wifiAddresses = this.state.data.map((item, index) =>
        <li key={index}>{item.site_name}<br />{item.street_address}<br />{item.city}, {item.zip_code}</li>
    )

               return(

            <div>
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