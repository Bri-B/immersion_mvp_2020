// Starting Express Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//path
const path = require('path');
app.use(express.static(__dirname + './../public')); //setting root html

//middleware
// app.use(express.json())

//connect test data
const testData = require('../exampleData');

// CRUD methods
app.get('/', (req, res) => {

})

// listening on port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})