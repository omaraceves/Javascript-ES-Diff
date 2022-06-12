//https://exploringjs.com/es6/ch_core-features.html#sec_from-obj-to-map

//Using the language construct object as a map from strings to arbitrary values 
//(a data structure) has always been a makeshift solution in JavaScript. 
//The safest way to do so is by creating an object whose prototype is null. 
//Then you still have to ensure that no key is ever the string '__proto__', 
//because that property key triggers special functionality in many JavaScript engines.

//The following ES5 code contains the function countWords that uses the object dict as a map:

var dict = Object.create(null);
function countWords(word) {
    var escapedWord = escapeKey(word);
    if (escapedWord in dict) {
        dict[escapedWord]++;
    } else {
        dict[escapedWord] = 1;
    }
}
function escapeKey(key) {
    if (key.indexOf('__proto__') === 0) {
        return key+'%';
    } else {
        return key;
    }
}


countWords('homie');
countWords('homie');
console.log(dict); //[Object: null prototype] { homie: 2 }

//In ES6, you can use the built-in data structure Map and don’t have to escape keys. 
//As a downside, incrementing values inside Maps is less convenient.

const map = new Map();
function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}

countWords('homie');
countWords('homie');
countWords('cayman');
console.log(map); //Map(2) { 'homie' => 2, 'cayman' => 1 }

//Another benefit of Maps is that you can use arbitrary values as keys, not just strings.

const map = new Map();
map.set('718', 'Porsche Cayman');
map.set('992', 'Porsche 911');
map.set('981', 'Porsche Cayman');

console.log(map.get('992')); //Porsche 911
