// Starting Express Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const {sequelize} = require('./db/drinksDB'); // connecting mysql database
// const axios = require('axios');
const cocktailDBReq = require('./cocktaildb');

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

app.get('/button', (req, res) => {
  // res.json({test: false}); // works
  // redirect to home 
  // console.log("===>", cocktailDBReq)
  cocktailDBReq()
  .then(result => {
    console.log("====>", result)
    res.send({test: true})
  })
  .catch(err => console.error("~~~axoisReq", err))
})

// listening on port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})