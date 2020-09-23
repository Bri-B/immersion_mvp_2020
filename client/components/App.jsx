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
      currName: '',
    };

    this.getRandomDrink = this.getRandomDrink.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.updateStateListArr = this.updateStateListArr.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentDidMount() {
    // axois request to server
    console.log('Mounted!');
    axios({
      url: 'http://localhost:8080/read',
      method: 'get',
    })
      .then((resultArr) => {
      // state change to track button click
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
    })
      .then((resultObj) => {
        // state change to track button click
        this.setState({
          name: resultObj.data.name,
          category: resultObj.data.category,
          glass: resultObj.data.glass,
          instructions: resultObj.data.instructions,
          thumbnail: resultObj.data.thumbnail,
          ingredientsList: resultObj.data.ingredientsList,
          measurements: resultObj.data.measurements,
        });
      })
      .catch((err) => console.error('handleNameClick err', err));
  }

  updateStateListArr() {
    console.log('Updated OrderedList!');
    axios({
      url: 'http://localhost:8080/read',
      method: 'get',
    })
      .then((resultArr) => {
      // state change to track button click
        this.setState({
          list: resultArr.data,
        });
      })
      .catch((err) => console.error('updateStateListArr err', err));
  }

  updateName(name, newName) {
    console.log('update!', name, newName);
    axios({
      url: 'http://localhost:8080/update',
      method: 'put',
      data: { name, newName },
    })
      .then(() => this.updateStateListArr())
      .then(() => this.setState({ name: newName }))
      .catch((err) => console.error('updateName err', err));
  }

  handleDelete(name) {
    // axois request to server
    console.log('Delete!', name);
    axios({
      url: 'http://localhost:8080/delete',
      method: 'delete',
      data: { name },
    })
      .then(() => {
        this.updateStateListArr();
      })
      .then(() => {
        this.setState({
          name: '',
          category: '',
          glass: '',
          instructions: '',
          thumbnail: '',
          ingredientsList: '',
          measurements: '',
          updatedAt: '',
          createdAt: '',
          currName: '',
        })
      })
      .catch((err) => console.error('handleDelete err', err));
  }

  getRandomDrink() {
    // axois request to server
    console.log('clicked!');
    axios({
      url: 'http://localhost:8080/button',
      method: 'get',
    })
      .then((resultObj) => {
      // state change to track button click
        this.setState({
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
        this.updateStateListArr();
      })
      .catch((err) => console.error('getRandomDrink err', err));
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
            <Button variant="outline-danger" onClick={this.getRandomDrink} size="lg" block>Get Drink</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            { list.length > 0 && <OrderedList list={list} nameClick={this.handleNameClick} />}
          </Col>
          <Col sm={7}>
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
