/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const _ = require('lodash');

class RecipeTable extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Ingredient</th>
          <th>Measurement</th>
        </tr>
        <tbody>
          {
            // zip array together
          // let arr = 
            // map over and apply template
          _.map(_.zip(this.props.ingredientsList.split(","), this.props.measurements.split(",")), set => {
            console.log(set);
            return (
              <tr>
                <td>{set[0]}</td>
                <td>{set[1]}</td>
              </tr>
            );
          })
            }
        </tbody>

      </table>
    );
  }
}

export default RecipeTable;
