function isPalindrome(word) {
  // Write your algorithm here
  if (word.length > 1) {
    const wordArray = word.split('');
    const length = wordArray.length;
    for (let index = 0; index < length; index++) {
      if (wordArray[index] === wordArray[length - 1 - index]) {
        if (index <= length / 2) {
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
}

/* 
  Add your pseudocode here
  someFunction (a string)
    turns string into an array of single characters
    compares the corresponding letters using indexes and .length to make sure all letters are accounted for
    returns true if all letters match
    else, return false
*/

/*
  Add written explanation of your solution here
  The function accepts an argument, a string, and will return true if it is a palindrome and falce if it is not. The function should compare the first letter to the last, second to the second to last, etc
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('');

  console.log("Expecting: true");
  console.log('=>', isPalindrome('tacocat'));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', isPalindrome('roor'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('ringer'))
}
module.exports = isPalindrome;