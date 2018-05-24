import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Landing.css';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="modal-title">Welcome to WyFy!</ModalHeader>
          <ModalBody >
            Get started by finding your current location!
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle} className="modal-map-button">View Map</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;