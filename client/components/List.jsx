/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import Nickname from './Nickname.jsx';

const _ = require('lodash');

const List = (props) => {
  const { name, onUpdate, onDelete } = props;
  return (
    <div>
      <Nickname updateName={onUpdate} name={name} />
      <div>
        {_.map(props, (item, key) => {
          if (`${item}`.includes('.jpg')) {
            return <Image key={key} src={item} fluid />;
          } else if(key === 'onUpdate' || key === 'onDelete'){
            return <span key={key}></span>
          } else if (key === 'name'){
            return <div key={key}><h3>{item}</h3></div>;
          } else {
            return <p key={key}>{item}</p>;
          }
        })}
      </div>
      { name && <Button type="button" onClick={() => onDelete(name)} variant="outline-warning">Delete From List</Button> }
    </div>
  );
};

export default List;
