//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_for-foreach-forof

//Prior to ES5, you iterated over Arrays as follows:

var porsches = ['Cayman', '911', 'Panamera'];

for (var i=0; i<porsches.length; i++) {
    var elem = porsches[i];
    console.log(elem);
}

//In ES5, you have the option of using the Array method forEach():

var porsches = ['Cayman', '911', 'Panamera'];

porsches.forEach(function (elem) {
    console.log(elem);
});


//In ES6, the for-of loop combines both for and forEach advantages,
//you can break from it and it is concise

const porsches = ['Cayman', '911', 'Panamera'];

for (const porsche of porsches ) {
    console.log(porsche);
}

// Cayman
// 911
// Panamera

//If you want both index and value of each array element, for-of has got you covered, too, via the new Array method entries() and destructuring:

const porsches = ['Cayman', '911', 'Panamera'];

for (const [index, elem] of porsches.entries()) {
    console.log(index+'. '+elem);
}

// 0. Cayman
// 1. 911
// 2. Panamera