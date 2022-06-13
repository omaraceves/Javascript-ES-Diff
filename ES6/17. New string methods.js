//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_new-str-methods-core-feature

//The ECMAScript 6 standard library provides several new methods for strings.

//From indexOf to startsWith:

var str = 'Porsche'

//ES5
if (str.indexOf('P') === 0) {
    console.log('Starts with P'); //Starts with P
} 

//ES6
if (str.startsWith('P')) {
    console.log('Starts with P'); //Starts with P
}

//From indexOf to endsWith:

let word = 'word'

// ES5
function endsWith(str, suffix) { 
    var index = str.indexOf(suffix);
    return index >= 0
      && index === str.length-suffix.length;
  }

  console.log(endsWith(word, 'd')); //true

  // ES6
  console.log(word.endsWith('d')); //true

  //From indexOf to includes:

  let str = 'Xbox';

  // ES5
  if (str.indexOf('x') >= 0) {
      console.log(true); //true
  } 

  // ES6
  if (str.includes('x')) {
      console.log(true); //true
  } 

  //From join to repeat (the ES5 way of repeating a string is more of a hack):

  // ES5
  console.log(new Array(3+1).join('#')); //###

  //ES6
  console.log('#'.repeat(3)); //###
  