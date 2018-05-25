import React, {Component} from 'react';
import { Alert, Badge } from 'reactstrap';
import './Reminder.css';


class Reminder extends React.Component {
    // Event listener to close wifi reminder alert.
constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss () {
    this.setState({ visible: false });
    }
    
    componentDidMount (){
        setTimeout(() => {
     this.setState({ visible: false });     
        }, 10000)
    }

  render () {
  return (
    <div>
      <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} >
        Please ensure your wifi is on!
      </Alert>
    </div>
  )
}



}

export default Reminder;