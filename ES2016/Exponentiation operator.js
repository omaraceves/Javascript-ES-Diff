//As seen on: https://exploringjs.com/es2016-es2017/ch_exponentiation-operator.html


//** is an infix operator for exponentiation that 
//produces the same result as Math.pow(x, y)

const squared = 3 ** 2; 
console.log(squared); // 9

//The exponentiation operator binds very strongly, 
//more strongly than * (which, in turn, binds more strongly than +)

console.log(2**2 * 2); //8
