{/* <h1>Code Wars Challenges</h1> */ }

///////////////////////
// Day 001 - June 13 \\
///////////////////////

// function multiply(a, b){
//   return a * b
// }

// console.log(multiply(2, 7));

//////////////////////////
// Jaden Casing Strings //
//////////////////////////
function toJadenCase(jadenTweet) {
    const toJadenCase = jadenTweet.toLowerCase().split(' ');
    for (let i = 0; i < toJadenCase.length; i++) {
        toJadenCase[i] = toJadenCase[i].charAt(0).toUpperCase() + toJadenCase[i].substr(1);
    }
    return toJadenCase.join(' ');
};

console.log(toJadenCase('how can mirrors be real if our eyes aren\'t real'));



///////////////////////
// Day 002 - June 14 \\
///////////////////////

//////////////////////////////
// Get the Middle Character //
//////////////////////////////
