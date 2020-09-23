/* eslint-disable react/prefer-stateless-function */
import React from 'react';
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
        <h1>Hello from List</h1>
        <Nickname updateName={this.props.onUpdate} name={this.props.name}/>
        <button type="button" onClick={() => this.props.onDelete(this.props.name)}>Delete</button>
        <div>
          {_.map(this.props, (item, index) => {
            if (`${item}`.includes('.jpg')) {
              return <img key={index} src={item} />;
            }
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default List;
