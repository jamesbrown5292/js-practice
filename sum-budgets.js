let getBudgets = function (objectsArray){
  let total = 0;
  for (let i=0; i<objectsArray.lengthl i++){
    total += objectsArray[i].budget;
  }
  return total;
}

//edabit level medium time taken 7 minutes