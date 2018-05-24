import React, {Component} from 'react';
import { Alert } from 'reactstrap';

class Reminder extends Component {

  render (){
  return (
    <div>
      <Alert color="success">
        Please ensure your wifi is turned on, Bruuuh!
      </Alert>
    </div>
  )
}
}

export default Reminder;