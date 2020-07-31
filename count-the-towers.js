//edabit medium challenge. 41 mins taken to complete.

function countTowers(towers) {
  let towersArray = [];
  for (let k=0; k<towers.length; k++){
    let subArray = towers[k][0]
		subArray = subArray.split('');
    for (let i=0; i<subArray.length; i++){
      if (subArray[i] == "#" && !towersArray.includes(i)){
				towersArray.push(i);
				if (subArray[i+1] == "#"){
					towersArray.push(i+1)
				} else if (subArray[i-1] == "#"){
					towersArray.push(i-1)
				}
        i++;
      }
    }
  };
  return towersArray.length / 2;
}
/* Create a function that counts the number of towers.

Examples
count_towers([
  ["     ##         "],
  ["##   ##        ##"],
  ["##   ##   ##   ##"],
  ["##   ##   ##   ##"]
]) ➞ 4

count_towers([
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
]) ➞ 6
