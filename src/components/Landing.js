import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Landing.css';
import Geolocation from './Geolocation';


class LandingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      geolocated:false,
      latitude: null,
      longitude:null
    };

    this.toggle = this.toggle.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getLocation(coords){
       this.setState({
         geolocated:true,
         latitude: coords.latitude,
         longitude:coords.longitude
       })

   }

  render() {
    
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="modal-title">Welcome to WyFy!</ModalHeader>
          <ModalBody >
            WyFy uses your devices location services to find wifi near your current location!
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle} className="modal-map-button">Got it!</Button>{' '}

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LandingModal;