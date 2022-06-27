//As seen on: https://exploringjs.com/es2016-es2017/ch_object-entries-object-values.html


//Object.entries()
//Returns the key values within an object as an array

const cayman718 = {brand: 'Porsche', name: 'Cayman 718', cylinders: '4'};
console.log(cayman718);  //{ brand: 'Porsche', name: 'Cayman 718', cylinders: '4' }

console.log(Object.entries(cayman718));

// [
//     [ 'brand', 'Porsche' ],
//     [ 'name', 'Cayman 718' ],
//     [ 'cylinders', '4' ]
// ]

//Object.Values()
//It works much like Object.entries(), but, as its name suggests, 
//it only returns the values of the own enumerable string-keyed properties:

const cayman718 = {brand: 'Porsche', name: 'Cayman 718', cylinders: '4'};
console.log(cayman718);  //{ brand: 'Porsche', name: 'Cayman 718', cylinders: '4' }

console.log(Object.values(cayman718)); //[ 'Porsche', 'Cayman 718', '4' ]

