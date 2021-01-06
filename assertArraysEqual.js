//takes in two arrays and returns true or false, based on a perfect match.
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

//assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const ArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true){
    console.log('✅ test passed') // emojis make it stand out
  } else {
    console.log('🛑  test failed')
  }
}

ArraysEqual([2, 3, 4, 5], [2, 3, 4, 5]) //true
ArraysEqual([2, 3, 4, 5], [1, 2, 3, 4]) //false
ArraysEqual(["yum"], ["yuM"]); //false
ArraysEqual([0], [1, 2, 3, 4]); // false
ArraysEqual(["boo", "hoo"], ["ha", "teehee"]) // false
ArraysEqual([2, 3, 4, 5], [2, 4, 4, 5])