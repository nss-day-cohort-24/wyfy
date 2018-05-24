import React from 'react';
import { Button } from 'reactstrap';
import './LocationItem.css';

const LocationItem = (props) => {

  return (
    <section className="row location-item">
      <div className="col-1">
        <img src="https://static.boredpanda.com/blog/wp-content/uploads/2016/03/trinity-college-long-room-library-dublin-1.jpg" />
      </div>
      <div className="col-9">
        <h6>This is the location name.{/*this.props.site_name*/}</h6>
        <p>This is the description.{/*this.props."description?"*/}<br/>
        This is the phone number.{/*this.props."phonenumber?""*/}</p>
      </div>
      <div className="col-2 row location-item-info">
        <div className="location-item-distance">
          <span className="location-item-distance-number">1.2km</span>
        </div>
      </div>
    </section>
  )
}

export default LocationItem;
