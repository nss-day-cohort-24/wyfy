import React, { Component } from 'react';

var API_KEY = 'AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY';

class AccordionItem extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        data: null,
        DataIsLoaded:false
      };
      this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
      this.setState({
        active: !this.state.active,
        className: "active"
      });
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
        let newName = name.replace(/\s/g, '');
        console.log("newname",newName)
        
        console.log(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCB2yFmL6AughPtoX4pP_4UMK6zGvApHiY&location=${latitude},${longitude}&radius=2000&keyword=${newName}`)
    }
    
    render() {
        if(this.state.DataIsLoaded === true){

      const activeClass = this.state.active ? "active" : "inactive";

      console.log("test", this.state.data);
      const wifiAddresses = this.state.data.map((item, index) =>
        <li key={index}><b>{item.site_name}</b> - 
        {item.site_type}<br />
        {item.street_address}<br />
        {item.city}, 
        {item.zip_code}<button onClick={this.grabGoogleData.bind(this,item.mapped_location.coordinates[1],item.mapped_location.coordinates[0],item.site_name)}>find place</button></li>
    )
      return (
              <div className={activeClass} onClick={this.toggle}>
                 <ul>
            {wifiAddresses}
            </ul>

              </div>
      );
    }else{

        return(
        <div>
        Loading... you suck
        </div>
        )
    }
}
  }

class NashData extends Component {

    constructor(props) {
        super(props);
       this.state = {
         data: null,
         DataIsLoaded:false
       };
       this.renderQuestion = this.renderQuestion.bind(this);
    }
    renderQuestion(key) {
        return <AccordionItem key={key} index={key} details={this.state.data[key]} />
      }

    

    render() {
        console.log(this.state,"thisstate");
        if(this.state.DataIsLoaded === true){
        

               return(
                    <div>
                      <div className="accordion-container">{Object.keys(this.state.data).map(this.renderQuestion)} </div>
                    </div>    
                  )


    }else{

        return(
        <div>
        Loading... you suck
        </div>
        )
    }
    }

}




export default NashData;