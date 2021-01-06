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

const eqArrays = function(array1, array2) {
  //takes in two arrays and returns true or false, based on a perfect match.
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1], ["cat", "dog"]), false);
assertEqual(eqArrays(["cat", "dog", "mouse"], ["cat", "dog", "mouse"]), true);