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

//Returns first item in the array
const head = function(array){
 const firstItem = array[0];
 return firstItem;
  }



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(["booyah", "kasha"]), "kasha");
assertEqual(head(["booyah", "kasha"]), "Booyah");