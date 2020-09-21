// Starting Express Server
const express = require('express')
const app = express()
const port = 8080

//middleware
app.use(express.json())

//connect test data
const testData = require('../exampleData')

// CRUD methods
app.get('/', (req, res) => {
  console.log(testData);
})

// listening on port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})