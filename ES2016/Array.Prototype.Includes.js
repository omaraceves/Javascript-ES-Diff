//As seen on: https://exploringjs.com/es2016-es2017/ch_array-prototype-includes.html#ch_array-prototype-includes

//Array Method includes
//It returns true if value is an element of its receiver (this), otherwise returns false
//includes is similar to indexOf, the difference is that includes() finds NaN, whereas indexOf() doesn’t

console.log(['a', 'b', 'c'].includes('a')); //true

console.log(['a', 'b', 'c'].includes('d')); //true

console.log(['a', 'b', 'c'].indexOf('b')); //1
console.log(['a', 'b', 'c'].includes('b')); //true

console.log([NaN].includes(NaN)); //true
console.log([NaN].indexOf(NaN)); //-1

