/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

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
    // console.log("changed input", e.target.value)
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const { name, updateName } = this.props;
    const { input } = this.state;

    return (
      <div>
        { name
          && (
          <div>
            <InputGroup>
              <InputGroup.Prepend>
                <Button type="submit" onClick={() => { updateName(name, input); }} variant="outline-light">Personalize Drink Name</Button>
              </InputGroup.Prepend>
              <FormControl as="textarea" aria-label="With textarea" placeholder="Drink Responsibly" size="sm" onChange={this.handleChange} />
            </InputGroup>
          </div>
          ) }
      </div>
    );
  }
}

export default Nickname;
