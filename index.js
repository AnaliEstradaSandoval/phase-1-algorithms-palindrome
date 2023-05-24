function reverse(word){
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reverseWord = reversedWordArray.join("")
  // return reverseWord;
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  // Write your algorithm here
  //I need to declare a function called isPalidrome 
  //This function is going to receive an arguement which is of a string type.
  //If the string reads the same backwards the fuction will return true.
  //If it's not a palidrome then it should return false.
const reverseWord = reverse(word)
if (word === reverseWord){
  return true;
} else{
return false;
}
}

/* 
  Add your pseudocode here
*/
// Reverse the input string
// Initialize a function to reverse the word
// If reverseWord === word
//   Print true
// Else 
//   Print false 
// End If

/*
  Add written explanation of your solution here
  In order to find weather the input is a palidrome I needed to 
  find out how to reverse a word. I applied the split, reverse and joing
  methods to the input to reverse it. 
  After that I needed to compare the input 
  submited in the isPalidrome function to the reversed word with
  a boolean.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
