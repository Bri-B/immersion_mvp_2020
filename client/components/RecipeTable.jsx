/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Table } from 'react-bootstrap';

const _ = require('lodash');

class RecipeTable extends React.Component {
  render() {
    return (
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
          // let arr =
            // map over and apply template
          _.map(_.zip(this.props.ingredientsList.split(','), this.props.measurements.split(',')), (set, index) =>
            // console.log(set);
            (
              <tr key={index}>
                <td className="table">{set[0]}</td>
                <td className="table">{set[1]}</td>
              </tr>
            ))
            }
        </tbody>
      </Table>
    );
  }
}

export default RecipeTable;
