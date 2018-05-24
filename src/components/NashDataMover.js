import React from 'react';
// import { Button } from 'reactstrap';
import NashData from './NashData';
import '.././App.css';
import './Mover.css';
// import './bootsrap';


class MoveNashData extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        condition: false,
        buttonCondition: false,
        imgCondition: false 
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
        <ButtonChild toggleClassName={ this.click }>
        </ButtonChild>
        
    <NashData search={this.props.search} data={this.props.data} loaded={this.props.loaded}/>

        </div>
        </div>
      )
    }
}
  
  class ButtonChild extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        imgCondition: false 
      }
      this.handleImgClick = this.handleImgClick.bind(this)
    }

      handleImgClick() {
        console.log("img click", this.state.imgCondition)
        this.setState({
          imgCondition: !this.state.imgCondition
        })
        console.log("img click", this.state.imgCondition)
     }
      render() {
        console.log(this.state, this.props);
          return (
              <div>
                <div className="d-flex justify-content-center">
        <button id="moverBtn"
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >        <div onClick={ this.handleImgClick } className={ this.state.imgCondition ? "imageArrow imgtoggle" : "imageArrow" }/>
{console.log(this.state.imgCondition)}
          { this.props.children }
        </button>
        </div>
        </div>
      )    
    }
}
  
  export default MoveNashData;