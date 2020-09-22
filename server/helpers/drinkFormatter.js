require("lodash");
const { array } = require("prop-types");

getListOfIngredients = (obj) => {
  _.filter(obj, ingredient => ingredient && ingredient.includes('Ingredient'))
}
getListOfMeasurements = (obj) => {
  _.filter(obj, measurement => measurement && measurement.includes('Measure'))
}

module.exports.drinkFormatter = (resultsObj) => {
  const [rawDrinkData] = resultsObj;
  const drink = {
    name: `${rawDrinkData.strDrink}`,
    category: `${rawDrinkData.strCategory}`,
    glass: `${rawDrinkData.strGlass}`,
    instructions: `${rawDrinkData.strInstructions}`,
    thumbnail: `${rawDrinkData.strDrinkThumb}`,
  }
  //may get syn issue
  drink.ingredientsList = getListOfIngredients(resultsObj);
  drink.measurements = getListOfMeasurements(resultsObj);
  console.log("!!!!!!!", drink);
  return drink;
}