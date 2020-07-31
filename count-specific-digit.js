/* Write a function that counts the number of times a specific digit occurs in a range (inclusive).
digitOccurrences(min, max, digit) ➞ number of times digit occurs
digitOccurrences(51, 55, 5) ➞ 6
[51, 52, 53, 54, 55] : 5 occurs 6 times

digitOccurrences(1, 8, 9) ➞ 0
digitOccurrences(-8, -1, 8) ➞ 1
digitOccurrences(71, 77, 2) ➞ 1 */

//edabit challenge took 21 min total to complete
function digitOccurrences(min, max, digit) {
  let counter = 0;
  let array = [];
  let string = "";
  for (let i = min; i<= max; i++){
    array.push(i);
  };
	for ( i = 0; i< array.length; i++){
    string += array[i].toString();
  };
  for ( i = 0; i< string.length; i++){
    if (string[i] === digit.toString()){
      counter ++;
    }
  };
  return counter;
};

console.log(digitOccurrences(1, 8, 9),
digitOccurrences(-8, -1, 8),
digitOccurrences(71, 77, 2));