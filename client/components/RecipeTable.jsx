/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Table } from 'react-bootstrap';

const _ = require('lodash');

const RecipeTable = (props) => (
  <Table hover>
    <thead>
      <tr>
        <th className="table">Ingredient</th>
        <th className="table">Measurement</th>
      </tr>
    </thead>
    <tbody>
      {
        // zip array together
        // map over and apply template
        _.map(_.zip(props.ingredientsList.split(','), props.measurements.split(',')), (set, index) => (
          <tr key={index}>
            <td className="table">{set[0]}</td>
            <td className="table">{set[1]}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

export default RecipeTable;
