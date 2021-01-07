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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object1);

  if (object1Keys !== object2Keys) {
    return false;
  };
  //loop through keys array returned by objectKeys for one of the objects
  for (let i = 0; i < object1Keys.length; i++) {
    const firstObjectKeys = object1Keys[i];
    const secondObjectKeys = object2Keys[i];
    //Array.isArray against both values to see if array comparisons need to be made.
    if (Array.isArray[firstObjectKeys] && Array.isArray[secondObjectKeys]) {
      return eqArrays(firstObjectKeys, secondObjectKeys);
    } else {
      //compare both objects' values for that key. 
      // As soon as there is not a match, we can return false
      if (firstObjectKeys !== secondObjectKeys) {
        return false;
      }
    }
  }
  //return true at end after loop
  return true;
};

//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false