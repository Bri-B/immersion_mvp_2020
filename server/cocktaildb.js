const axios = require('axios');
// const instance = axios.create();

module.exports = axios({
  url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  method: 'get',
  // responseType: 'json'
})