//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
let sentence = 'When i went to the mall i bought a pair of shoes.';

function capitalize(str) {
  let strArr = str.split(' ');
  let caps = []
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (word === 'i') {
      caps.push(strArr[i].toUpperCase())
    } else {
      caps.push(strArr[i])
    }
  }
  return caps
}
console.log(capitalize(sentence))


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

let count = 0
function countA(str) {
  let strArr = str.toLowerCase().split('');
  for (let i = 0; i < strArr.length; i++) {
    let letter = strArr[i]
    if (letter == 'a') {
      count++
    }
  }
  return count
}

//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

function scream(str) {
  let strArr = str.split(' ');
  let yell = []
  console.log(strArr)

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (word == 'scream' || word == 'scream,') {
      yell.push(word.toUpperCase())
    } else {
      yell.push(word)
    }
  }
  return yell
}
console.log(scream(text))
