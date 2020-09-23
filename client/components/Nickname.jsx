/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import DOMPurify from 'dompurify';

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
    const dirty = `${e.target.value}`;
    const clean = DOMPurify.sanitize(dirty);
    this.setState({
      input: clean,
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
              <FormControl as="textarea" aria-label="With textarea" placeholder="... Remember to Always Drink Responsibly" size="sm" onChange={this.handleChange} />
            </InputGroup>
          </div>
          ) }
      </div>
    );
  }
}

export default Nickname;
