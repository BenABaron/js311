
/**
 * Returns true if the number is even
 * @param {number} num 
 */
const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }

}

/**
 * Returns the sum of all of the numbers in the array
 * @param {array} arr the array to be summed up
 */
const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  })

}

/**
 * Returns true if the sum of the array is equal to the given sum, and false if not
 * @param {array} arr the array to check against the sum
 * @param {number} sum the sum to check
 */
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

  let arrSum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  })

  if (arrSum == sum) {
    return true;
  } else {
    return false;
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}