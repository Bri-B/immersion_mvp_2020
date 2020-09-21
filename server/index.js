// Starting Express Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const {sequelize} = require('./db/drinksDB') // connecting mysql database

//path
const path = require('path');
app.use(express.static(__dirname + './../public')); //setting root html

//middleware
// app.use(express.json())

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

// listening on port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})