/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';

const _ = require('lodash');

class Nickname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" id="lname" name="lname" onChange={this.handleChange}/>
        <button type="submit" onClick={() => { this.props.updateName(this.props.name, this.state.input) }}>Update</button>
      </div>
    );
  }
}

export default Nickname;
