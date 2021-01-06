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

//MIDDLE FUNCTION
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (array) {
  //create middleArray
  let middleArray = [];
  //find length of array
  //divide length of array by 2 to find middle .. round  to whole number
  middleNumIndex = Math.floor(array.length / 2)
  //conditions
  //if length === even, there will be 2 values
  //if length === odd, there will only be 1 value
  if (array.length < 3) {
    return middleArray
  } else if (array.length % 2 === 0) {
    //
    middleArray.push(array[middleNumIndex]) + middleArray.push(array[middleNumIndex - 1])
  } else {
    middleArray.push(array[middleNumIndex])
  }
  return middleArray.reverse();
}

//TEST CODE
assertArraysEqual(middle([2, 2, 2, 5, 2, 2, 2]), [5]); 
assertArraysEqual(middle([2, 2, 2, 5, 6, 2, 2, 2]), [5, 6]); 
assertArraysEqual(middle([2, 2, 2, 5, 6, 7, 2, 2, 2]), [6]); 
assertArraysEqual(middle([1, 2]), []); 