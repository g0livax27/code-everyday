{/* <h1>Other Code Challenges</h1> */ }

///////////////////////
// Day 005 - June 27 \\
///////////////////////

////////////////
// Palindrome \\
////////////////
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str === str.split('').reverse().join('')
};

console.log(palindrome('kayak'));


//////////////
// Max Char \\
//////////////
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let maxArr = str.split('')
//     for (let i = 0; i < str.length; i++)
// };