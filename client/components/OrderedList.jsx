/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const _ = require('lodash');

class OrderedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <h1>Hello from Ordered List</h1>
        {_.map(this.props.list, (name, index) => <li id="name" key={index} onClick={()=>this.props.nameClick(name)}>{name}</li>)}
      </ul>
    );
  }
}

export default OrderedList;
