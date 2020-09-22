const Sequelize = require('sequelize');

const sequelize = new Sequelize('drinks', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

const Drink = sequelize.define('drink', {
  name: Sequelize.STRING,
  category: Sequelize.STRING,
  glass: Sequelize.STRING,
  instructions: Sequelize.TEXT,
  thumbnail: Sequelize.STRING,
  ingredientsList: Sequelize.STRING,
  measurements: Sequelize.STRING,
});

// Drink.sync({ force: true }); // use when i want to empty the table
Drink.sync();

module.exports.sequelize = sequelize;
module.exports.Drink = Drink;
