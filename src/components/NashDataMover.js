import React from 'react';
// import { Button } from 'reactstrap';
import NashData from './NashData';
import '.././App.css';
import './Mover.css'


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
      return (
          <div>
              <div className={ this.state.buttonCondition ? "button toggled" : "button" }>
        <ButtonChild 
        toggleClassName={ this.click }
        >
        </ButtonChild>
        
        <NashData
        />
        </div>
        </div>
      )
    }
}
  
  class ButtonChild extends React.Component {
      render() {
          return (
              <div>
        <button
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >Mover
          { this.props.children }
        </button>
        </div>
      )    
    }
  }
  
  export default MoveNashData;