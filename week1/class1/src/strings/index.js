
/**
 * This function splits a string on the provided delimiter and returns the resulting array
 * 
 * for example:
 * str: "The brown fox jumps over the lazy dog"
 * delim: ' '
 * result: ['the', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
 * @param {string} str the string to split
 * @param {string} delim the character to split on
 */
const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);

}

/**
 * This function puts each pair of characters into an array
 * @param {string} str the string to be paired
 */
const pairs = (str) => {
  // write code for strings.pairs
  let pairArr = [];

  for (let i = 0; i < str.length; i+=2){
    pairArr.push(str.slice(i, i+2));
  }

  return pairArr;

}

/**
 * This function reverses a string
 * @param {string} str the string to be reversed
 */
const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split('');
  arr.reverse();
  return arr.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}