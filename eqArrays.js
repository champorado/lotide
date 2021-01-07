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
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    const num1 = array1[i];
    const num2 = array2[i];

    if (num1 !== num2){
      return false;
    } 
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([], ["cat", "dog"]), false);
assertEqual(eqArrays(["cat", "dog", "mouse"], ["cat", "dog", "mouse"]), true);