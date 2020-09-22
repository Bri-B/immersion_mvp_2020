const {Drink} = require('../db/drinksDB'); // connecting mysql database
// create
saveDrink = (obj) => {
  // console.log("====>", obj); 
  return  Drink.create({
    name: obj.name,
    category: obj.category,
    glass: obj.glass,
    instructions: obj.instructions,
    thumbnail: obj.thumbnail,
    ingredientsList: obj.ingredientsList,
    measurements: obj.measurements
  })
  .catch(err => console.error("initializing drink", err))
}
//read
grabAll = () => Drink.findAll()

//update

//delete

module.exports.saveDrink = saveDrink;
module.exports.grabAll = grabAll;