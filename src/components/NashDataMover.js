import React from 'react';
// import { Button } from 'reactstrap';
import NashData from './NashData';
import '.././App.css';
import './Mover.css'


class MoveNashData extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        condition: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        condition: !this.state.condition
      })
    }
    render() {
      return (
        <ButtonChild        
          className={ this.state.condition ? "button toggled" : "button" }
          toggleClassName={ this.handleClick }
        >
          <NashData />
        </ButtonChild>
      )
    }
  }
  
  class ButtonChild extends React.Component {
    render() {
      return (
        <div
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >
          { this.props.children }
        </div>
      )    
    }
  }
  
  export default MoveNashData;