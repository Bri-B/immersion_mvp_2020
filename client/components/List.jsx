/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import Nickname from './Nickname.jsx';

const _ = require('lodash');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: props.name
    };
  }

  render() {
    return (
      <div>
        <Nickname updateName={this.props.onUpdate} name={this.props.name} />
        <Button type="button" onClick={() => this.props.onDelete(this.props.name)} variant="outline-warning">Delete</Button>
        <div>
          {_.map(this.props, (item, index) => {
            if (`${item}`.includes('.jpg')) {
              return <Image key={index} src={item} fluid />;
            } else if(index === 0){
              return <p key={index} class="name">{item}</p>;
            }
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default List;
