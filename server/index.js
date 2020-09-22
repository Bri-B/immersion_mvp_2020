// Starting Express Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const {sequelize} = require('./db/drinksDB'); // connecting mysql database
const {drinkFormatter} = require('./helpers/drinkFormatter');
const {saveDrink, grabAll, remove} = require('./helpers/crudFunctions');
const cocktailDBReq = require('./cocktaildb');

//path
const path = require('path')
app.use(express.static(__dirname + './../public')); //setting root html

//middleware
app.use(express.json())

//connect test sql connection 
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// CRUD methods
app.get('/', (req, res) => {

})

app.get('/button', (req, res) => {
  cocktailDBReq()
  .then(result => drinkFormatter(result.data.drinks[0]))
  .then(obj => saveDrink(obj))
  .then(result => {
    res.json(result);
  })
  .catch(err => console.error("~~~axoisReq", err))
})

app.get('/read', (req, res) => {
  grabAll()
  .then(result => res.json(result))
  .catch(err => console.error("~~~axoisReq", err))
})

app.get('/update', (req, res) => {

})

app.get('/delete', (req, res) => {
  const {name} = req.body;
  remove(name)
  .then(result => res.json(result))
  .catch(err => console.error("~~~axoisReq", err))
})

// listening on port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})