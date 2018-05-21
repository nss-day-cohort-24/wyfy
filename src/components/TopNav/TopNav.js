import React, { Component } from 'react';
import Logo4 from '../Logos/Logo4';
import './topnav.css';

import {
  Navbar,
  Input,
 } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="d-flex justify-content-between" color="light" light expand="md">         
          <Logo4 />
          <Input className="col-5 searchBar" type="search" name="search" id="search" placeholder="Enter Zip..." />
        </Navbar>
      </div>
    );
  }
}