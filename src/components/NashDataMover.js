import React from 'react';
// import { Button } from 'reactstrap';
import NashData from './NashData';
import '.././App.css';
import './Mover.css';
import upArrow from '../images/upArrow.png';
// import './bootsrap';


class MoveNashData extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        condition: false,
        buttonCondition: false 
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleButtonClick = this.handleButtonClick.bind(this)
      this.click = this.click.bind(this)
    }
    handleClick() {
        console.log("test handle")
      this.setState({
        condition: !this.state.condition
      })
    }
    handleButtonClick(){
        console.log("test button handle")

        this.setState({
            buttonCondition: !this.state.buttonCondition
        })
    }

    click(){
        this.handleButtonClick();
        this.handleClick();
        console.log("click");
    }
    render() {
      console.log("mover props",this.props)
      return (
          <div>
              <div className={ this.state.buttonCondition ? "button toggled" : "button" }>
        <ButtonChild 
        toggleClassName={ this.click }
        >
        </ButtonChild>
        
    <NashData search={this.props.search} data={this.props.data} loaded={this.props.loaded} currentLat={this.props.currentLat} currentLon={this.props.currentLon} geolocated={this.props.geolocated}/>

        </div>
        </div>
      )
    }
}
  
  class ButtonChild extends React.Component {
      render() {
          return (
              <div>
                <div className="d-flex justify-content-center">
        <button id="moverBtn"
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >        <img src={upArrow} alt="up arrow" />

          { this.props.children }
        </button>
        </div>
        </div>
      )    
    }
  }
  
  export default MoveNashData;