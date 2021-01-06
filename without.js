//takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    const num1 = array1[i];
    const num2 = array2[i];

    if (num1 !== num2) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log('✅ test passed') // emojis make it stand out
  } else {
    console.log('🛑  test failed')
  }
}

//function should take in a source array and a itemsToRemove array. It should return a new array with only //those elements from source that are not present in the itemsToRemove array.
const without = function (source, itemsToRemove) {
  const newArray = [];

  //go through source array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;

}

// TEST CASE
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], ["2"])) // => ["1", "2"]
console.log(without(["1", "2", "3"], ["1"])) // ["1", "2", "3"]
console.log(without(["pig", "latin"], ["latin"])) // ["pig"]
console.log(without(["eenie", "meenie", "miney", "moe"], ["moe"])) // ["eenie", "meenie", "miney"]

console.log('-----------------------')
//FURTHER TESTS
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);