import React, {Component} from 'react';
import { Alert, Badge } from 'reactstrap';

class Reminder extends Component {

  render (){
  return (
    <div>
      <Alert color="success">
        Please ensure your wifi is on!
        <Badge color="danger" className="dismiss-alert-button">Dismiss</ Badge>
      </Alert>
    </div>
  )
}
}

export default Reminder;