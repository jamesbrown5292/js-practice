/*Create a function that tweaks letters by one forward (+1) or backwards (-1) according to an array.
e.g.
tweakLetters("apple", [0, 1, -1, 0, -1]) ➞ "aqold"
"p" + 1 => "q"; "p" - 1 => "o"; "e" - 1 => "d"
tweakLetters("many", [0, 0, 0, -1]) ➞ "manx"
tweakLetters("rhino", [1, 1, 1, 1, 1]) ➞ "sijop" */

//edabit level hard took 29 minutes to complete
let tweakLetters = function(word, array) {

  let wordArray = word.split('');
  let letterTweaker = function (letter, number){
    letter = letter.charCodeAt();
    letter += number;
		if (letter > 122) {
			letter -= 26;
		};
		if (letter < 97) {
			letter += 26;
		}
    letter = String.fromCharCode(letter);
		return letter;
  }
  let emptyArray = [];
  for (let i=0; i<array.length; i++){
    let newLetter = letterTweaker(wordArray[i], array[i]);
    emptyArray.push(newLetter);
  }
  return emptyArray.join('')
}