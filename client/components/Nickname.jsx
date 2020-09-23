/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const _ = require('lodash');

class Nickname extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="lname" name="lname" />
        <button type="submit">Update</button>
      </div>
    );
  }
}

export default Nickname;
