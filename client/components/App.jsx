/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
// import Button from 'Button';
import List from './List.jsx';
import OrderedList from './OrderedList.jsx';

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

  handleDelete(name) {
    // axois request to server
    console.log('Delete!', name);
    this.handleStateOnDelete();
    axios({
      url: 'http://localhost:8080/delete',
      method: 'delete',
      data: { name },
      // responseType: 'json'
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
      .catch((err) => console.error('click err', err));
  }

  render() {
    return (
      <div>
        <h1>Header from APP.JSX </h1>
        <button onClick={this.handleClick}>Get Drink</button>
        <div>
          <List
            onDelete={this.handleDelete}
            name={this.state.name}
            category={this.state.category}
            glass={this.state.glass}
            instructions={this.state.instructions}
            thumbnail={this.state.thumbnail}
            ingredientsList={this.state.ingredientsList}
            measurements={this.state.measurements}
          />
        </div>
        <div>
          <OrderedList list={this.state.list} nameClick={this.handleNameClick}/>
        </div>
      </div>
    );
  }
}

export default App;
