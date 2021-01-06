// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  if (actual !== expected) {
    console.log(`😢 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }


};

//FUNCTION countOnly
//return OBJECT containing counts of everything INPUT object listed
// only keys which have a truthy value should be counted in resulting object
//if string is meant to be counted but does not exist in input array, it does not have to be included in fnal count

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }



    }
  }
  return results;
}

//TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


//comparing (result1 contains CountOnly function being passed) 
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);