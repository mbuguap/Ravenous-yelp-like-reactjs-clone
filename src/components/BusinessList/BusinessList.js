import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

export class BusinessList extends Component {
  render() {
    return (
      <div className='BusinessList'>
        <Business />
      </div>
    );
  }
}

export default BusinessList;
