const Sequelize = require('sequelize');
const sequelize = new Sequelize('drinks', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

const Drink = sequelize.define('drink', {
  name: Sequelize.STRING,
  category: Sequelize.STRING,
  glass: Sequelize.STRING,
  instructions: Sequelize.TEXT,
  thumbnail: Sequelize.STRING,
  ingredientsList: Sequelize.STRING,
  measurements: Sequelize.STRING
});

sequelize.sync({force: true}).then(function() {
  return Drink.create({
    name: 'test',
    category: 'test',
    glass: 'test',
    instructions: 'test',
    thumbnail: 'test',
    ingredientsList: 'test',
    measurements: 'test'
  });
})
// .then(() => console.log(`connected`))
.catch(err => console.error("initializing drink", err))

module.exports.sequelize = sequelize;