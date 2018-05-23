import React from 'react';
import Logo4 from '../Logos/Logo4';
import './topnav.css';
import searchIcon from '../../images/wyfy-search.svg';

import {
  Navbar,
  Input,
  InputGroup,
  InputGroupAddon
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

  search(event){
    this.props.search(document.getElementById("search").value);
  }

  render() {
    return (
      <div>
        <Navbar className="d-flex justify-content-between navBar">         
          <Logo4 />        
          <InputGroup className="searchInputGroup col-6">
            <InputGroupAddon addonType="prepend">
              <img src={searchIcon} alt="logo" className="icon" />
            </InputGroupAddon>
            <Input className="searchBar" type="search" name="search" id="search" placeholder="Enter Name..." onKeyUp={this.search.bind(this)}/>
          </InputGroup>
        </Navbar>
      </div>
    );
  }
}