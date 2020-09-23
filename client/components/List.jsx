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
    const { name, onUpdate, onDelete } = this.props;
    return (
      <div>
        <Nickname updateName={onUpdate} name={name} />
        <div>
          {_.map(this.props, (item, index) => {
            if (index === 2) {
              return <h2>{item}</h2>;
            }
            if (`${item}`.includes('.jpg')) {
              return <Image key={index} src={item} fluid />;
            }
            return <p key={index}>{item}</p>;
          })}
        </div>
        { name && <Button type="button" onClick={() => onDelete(name)} variant="outline-warning">Delete From List</Button> }
      </div>
    );
  }
}

export default List;
