// import Button from 'Button';
const React = require('react');
const axios = require('axios');
import List from './List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      category: "",
      glass: "",
      instructions: "",
      thumbnail: "",
      ingredientsList: "",
      measurements: "",
      updatedAt: "",
      createdAt: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // axois request to server
    console.log("clicked!")
    axios({
      url: 'http://localhost:8080/button',
      method: 'get',
      // responseType: 'json'
    })
    .then(resultObj => {
      //state change to track button click
      this.setState(state => ({
        id: resultObj.data.id,
        name: resultObj.data.name,
        category: resultObj.data.category,
        glass: resultObj.data.glass,
        instructions: resultObj.data.instructions,
        thumbnail: resultObj.data.thumbnail,
        ingredientsList: resultObj.data.ingredientsList,
        measurements: resultObj.data.measurements,
      }));
    })
    .catch(err => console.error("click err", err))
  }
  render(){
    let drinkRecipe = [this.state];
    return (
      <div>
        <h1>Header from APP.JSX </h1>
        <button onClick={this.handleClick}>Get Drink</button>
        <div>
          <List 
          name={this.state.name}
          category={this.state.category}
          glass={this.state.glass}
          instructions={this.state.instructions}
          thumbnail={this.state.thumbnail}
          ingredientsList={this.state.ingredientsList}
          measurements={this.state.measurements}
          ></List>
        </div>
      </div>
    )
  }
}

export default App;