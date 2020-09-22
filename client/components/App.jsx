// import Button from 'Button';
const React = require('react');
const axios = require('axios');
import List from './List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkRecipe: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // axois request to server
    axios({
      url: 'http://localhost:8080/button',
      method: 'get',
      // responseType: 'json'
    })
    .then(result => console.log(result));
    //state change to track button click
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
  }
  render(){
    return (
      <div>
        <h1>Header from APP.JSX </h1>
        <button onClick={this.handleClick}>Get Drink</button>
        <div>
          <List></List>
        </div>
      </div>
    )
  }
}

export default App;