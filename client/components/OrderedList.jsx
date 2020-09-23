/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const _ = require('lodash');

const OrderedList = (props) => {
  const { list, nameClick } = props;
  return (
    <ul className="drinks-list">
      <h3>View Drinks</h3>
      {_.map(list, (name, index) => <li id="name" className="drink" key={index} onClick={()=>nameClick(name)}>{name}</li>)}
    </ul>
  );
}

export default OrderedList;
