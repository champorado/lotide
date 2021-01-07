// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  if (actual !== expected) {
    console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  

};

//FUNCTION
const countLetters = function(string) {
  //take away spaces in string
  const noSpace = string.split(/\s/).join('');
  let letterCount = {};  
  
  //loop through noSpace string and count letters
  for (const letter of noSpace) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
    
  }
  return letterCount;
}
