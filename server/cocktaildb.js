const axios = require('axios');
// const instance = axios.create();

module.exports = () => {
  return axios({
  url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  method: 'get',
  // responseType: 'json'
  })
}