/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const _ = require('lodash');

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from List</h1>
        <div>
          {_.map(this.props, (item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    );
  }
}

export default List;
