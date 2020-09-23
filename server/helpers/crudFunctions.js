/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const { Drink } = require('../db/drinksDB'); // connecting mysql database
// create
saveDrink = (obj) =>
  // console.log("====>", obj);
  Drink.create({
    name: obj.name,
    category: obj.category,
    glass: obj.glass,
    instructions: obj.instructions,
    thumbnail: obj.thumbnail,
    ingredientsList: obj.ingredientsList,
    measurements: obj.measurements,
  })
    .catch((err) => console.error('initializing drink', err));

// read
// grabAll = () => Drink.findAll({limit: 10, order: ['createdAt']})
grabAll = () => Drink.findAll();

// grabone
// grabAll = () => Drink.findAll({limit: 10, order: ['createdAt']})
grabOne = (name) => Drink.findOne({
  where: {
    name,
  },
});

// update
update = (name, newName) => Drink.update(
  { name: newName },
  { where: { name } },
);

// delete
remove = (name) => Drink.destroy({
  where: {
    name,
  },
});

module.exports.saveDrink = saveDrink;
module.exports.grabAll = grabAll;
module.exports.remove = remove;
module.exports.grabOne = grabOne;
module.exports.update = update;
