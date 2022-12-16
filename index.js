function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

   // Continue until the pointers meet in the middle
   while (left < right) {
    // If the characters at the current pointers don't match, return false
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers inwards towards the middle of the string
    left++;
    right--;
  }

  // If we get to this point, the string must be a palindrome
  return true;
}


/* 
  Add your pseudocode here
  1. find the length of the string
  2. loop through the first half of the string
  3. check both halves of the string and see if they are similar
  4. if they are similar it is a palindrome
    else, it is a palindrome 
*/

/*
  Add written explanation of your solution here

   a string is a palindrome if it can be read the same way back and forth e.g madam you should compare both halves of the string and if they are similar then it is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
