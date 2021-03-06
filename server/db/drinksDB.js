const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DB, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
})
// .catch(err => console.log("set up db", err))

const Drink = sequelize.define('drink', {
  name: Sequelize.STRING,
  category: Sequelize.STRING,
  glass: Sequelize.STRING,
  instructions: Sequelize.TEXT,
  thumbnail: Sequelize.STRING,
  ingredientsList: Sequelize.STRING,
  measurements: Sequelize.STRING,
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
});

User.hasMany(Drink);

Drink.sync({ force: true }); // use when i want to empty the table
// User.sync({ force: true });
User.sync();
// Drink.sync(); 

module.exports.sequelize = sequelize;
module.exports.Drink = Drink;
module.exports.User = User;
