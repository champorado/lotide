//assertEqual Function
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

//returns the "tail" of an array: everything except for the first item (head) of the provided array
const tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

//TEST CASE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"