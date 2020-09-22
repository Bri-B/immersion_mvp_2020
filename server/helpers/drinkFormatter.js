getListOfIngredients = (obj) => {
  let arr = [];
  for(let key in obj){
    if(key.includes('Ingredient')){
      if(obj[key]){
        arr.push(obj[key])
      }
    }
  }
  return arr;
}
getListOfMeasurements = (obj) => {
  let arr = [];
  for(let key in obj){
    if(key.includes('Measure')){
      if(obj[key]){
        arr.push(obj[key])
      }
    }
  }
  return arr;
}

module.exports.drinkFormatter = (resultsObj) => {
  // console.log("^^^^^^^^", resultsObj);
  const drink = {
    name: `${resultsObj.strDrink}`,
    category: `${resultsObj.strCategory}`,
    glass: `${resultsObj.strGlass}`,
    instructions: `${resultsObj.strInstructions}`,
    thumbnail: `${resultsObj.strDrinkThumb}`,
  }
  //may get syn issue
  drink.ingredientsList = getListOfIngredients(resultsObj).join(",");
  drink.measurements = getListOfMeasurements(resultsObj).join(",");
  // console.log("!!!!!!!", getListOfIngredients(resultsObj));
  return drink;
}