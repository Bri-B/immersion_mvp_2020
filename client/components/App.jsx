/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import {
  Button, Container, Row, Col,
} from 'react-bootstrap';

import List from './List.jsx';
import OrderedList from './OrderedList.jsx';
import RecipeTable from './RecipeTable.jsx';

const React = require('react');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      category: '',
      glass: '',
      instructions: '',
      thumbnail: '',
      ingredientsList: '',
      measurements: '',
      updatedAt: '',
      createdAt: '',
      list: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleStateOnDelete = this.handleStateOnDelete.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentDidMount() {
    // axois request to server
    console.log('Mounted!');
    axios({
      url: 'http://localhost:8080/read',
      method: 'get',
      // responseType: 'json'
    })
      .then((resultArr) => {
      // state change to track button click
      // console.log(resultArr);
        this.setState({
          list: resultArr.data,
        });
      });
  }

  handleNameClick(name) { // axois request to server
    console.log('name clicked!', name);
    axios({
      url: 'http://localhost:8080/grabone',
      method: 'get',
      params: { name },
      // responseType: 'json'
    })
      .then((resultObj) => {
        // state change to track button click
        this.setState({
          id: resultObj.data.id,
          name: resultObj.data.name,
          category: resultObj.data.category,
          glass: resultObj.data.glass,
          instructions: resultObj.data.instructions,
          thumbnail: resultObj.data.thumbnail,
          ingredientsList: resultObj.data.ingredientsList,
          measurements: resultObj.data.measurements,
        });
      })
      .catch((err) => console.error('click err', err));
  }

  handleStateOnDelete() {
    console.log('Updated OrderedList!');
    axios({
      url: 'http://localhost:8080/read',
      method: 'get',
    })
      .then((resultArr) => {
      // state change to track button click
      // console.log(resultArr);
        this.setState({
          list: resultArr.data,
        });
      });
  }

  updateName(name, newName) {
    console.log('update!', name, newName);
    axios({
      url: 'http://localhost:8080/update',
      method: 'put',
      data: { name, newName },
      // responseType: 'json'
    })
      .then(() => this.handleStateOnDelete());
  }

  handleDelete(name) {
    // axois request to server
    console.log('Delete!', name);
    axios({
      url: 'http://localhost:8080/delete',
      method: 'delete',
      data: { name },
      // responseType: 'json'
    })
      .then(() => {
        this.handleStateOnDelete();
      });
  }

  handleClick() {
    // axois request to server
    console.log('clicked!');
    axios({
      url: 'http://localhost:8080/button',
      method: 'get',
      // responseType: 'json'
    })
      .then((resultObj) => {
      // state change to track button click
        this.setState({
          id: resultObj.data.id,
          name: resultObj.data.name,
          category: resultObj.data.category,
          glass: resultObj.data.glass,
          instructions: resultObj.data.instructions,
          thumbnail: resultObj.data.thumbnail,
          ingredientsList: resultObj.data.ingredientsList,
          measurements: resultObj.data.measurements,
        });
      })
      .then(() => {
        this.handleStateOnDelete();
      })
      .catch((err) => console.error('click err', err));
  }

  render() {
    const {
      name,
      category,
      glass,
      instructions,
      thumbnail,
      ingredientsList,
      measurements,
      list,
    } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Drink Roulette!</h1>
            <Button variant="outline-danger" onClick={this.handleClick} size="lg" block>Get Drink</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderedList list={list} nameClick={this.handleNameClick} />
          </Col>
          <Col sm={8}>
            <List
              onUpdate={this.updateName}
              onDelete={this.handleDelete}
              name={name}
              category={category}
              glass={glass}
              instructions={instructions}
              thumbnail={thumbnail}
            />
            {
            ingredientsList
            && (
            <RecipeTable
              ingredientsList={ingredientsList}
              measurements={measurements}
            />
            )
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
