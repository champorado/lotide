///takes in two arrays and returns true or false, based on a perfect match.
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
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true){
    console.log('✅ test passed') // emojis make it stand out
  } else {
    console.log('🛑  test failed')
  }
}

//FUNCTION

const letterPositions = function (sentence) {
  const results = {};
  let index = -1;
  //loop through SENTENCE and find index of letters
  for (const character of sentence) {
    //if there is no space, continue to update index
    if (character !== " ") {
      //update letters to RESULTS{}
      if (results[character]) {
        index += 1;
        results[character].push(index);
      } else {
        index += 1;
        results[character] = [index];
      }
    } else {
      index += 1
    }

  }
  return results;
};

console.log(letterPositions("lighthouse "))



//TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);