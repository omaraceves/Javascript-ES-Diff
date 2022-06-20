//As seen on: https://exploringjs.com/es2016-es2017/ch_async-functions.html

//The following variants of async functions exists. Note the keyword async everywhere.

//Async function declarations: 
async function foo() {}

//Async function expressions: 
const foo = async function () {};

//Async method definitions: 
let obj = { async foo() {} }

//Async arrow functions: 
const foo = async () => {};

//Async functions always return promises

//Fulfilling the Promise of an async function

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

printMyPorsche('Cayman').then(x => console.log(x)); //Porsche Cayman

//Rejecting a promise of an async function

const triggerError = async () => {
    throw new Error('Problem!');
}

triggerError().catch(x => console.log(x)); //Error: Problem!

//await: Handling results and errors of asynchronous computations via await
//The operator await (which is only allowed inside async functions) waits for its operand, 
//a Promise, to be settled

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

async function callPrintMyPorsche(name) {
    printMyPorsche(name).then(x => console.log(x));
}

callPrintMyPorsche('Cayman'); //Porsche Cayman

//callPrintMyPorsche with await:

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

async function callPrintMyPorscheWithAwait(name) {
    const result = await printMyPorsche(name);
    console.log(result);
}

callPrintMyPorscheWithAwait('911'); //Porsche 911

//Handling multiple asynchronous results sequentially

async function getBrand() {
    return 'Porsche';
}

async function getCarFullName(brand, name) {
    return `${brand} ${name}`;
}

async function printCar(name) {
    getBrand().then(brand => getCarFullName(brand, name))
        .then(fullName => console.log(fullName));
}

printCar('Cayman'); //Porsche Cayman

//printCar with await

async function getBrand() {
    return 'Porsche';
}

async function getCarFullName(brand, name) {
    return `${brand} ${name}`;
}

async function printCar(name) {
    const brand = await getBrand();
    const fullName = await getCarFullName(brand, name);
    console.log(fullName);
}

printCar('911'); //Porsche 911

//Handling multiple asynchronous results in parallel

async function getBrand() {
    return 'Porsche';
}

async function getCarName() {
    return '911 Turbo S';
}

function printCar() {
    return Promise.all([
        getBrand(),
        getCarName()
    ])
    .then(([result1, result2]) => 
        console.log(`${result1} ${result2}`));
}

printCar(); //Porsche 911 Turbo S

//Handling multiple results with await

async function getBrand() {
    return 'Toyota';
}

async function getCarName() {
    return '4runner TRD Pro';
}

async function printCar() {
    const [result1, result2] = await Promise.all([
            getBrand(),
            getCarName()
        ]);

    console.log(`${result1} ${result2}`);
}

printCar(); //Toyota 4runner TRD Pro

//Catching Errors
//await allow us to use a traditional try catch block while calling an async function
//in a way, await allow us to get rid of the .then() .catch() way of handling promises.

async function callError() {
    throw new Error('This Failed!');
}

async function myFunction() {
    try {
        await callError();
    } catch(err) {
        console.error(err); //Error: This Failed!
    }
}

myFunction();


//Async functions are started synchronously, settled asynchronously
//This is how async functions are executed:
// The result of an async function is always a Promise p. That Promise is created when starting the execution of the async function.
// The body is executed. Execution may finish permanently via return or throw. Or it may finish temporarily via await; in which case execution will usually continue later on.
// The Promise p is returned.

//While executing the body of the async function, return x resolves the Promise p with x, 
//while throw err rejects p with err. The notification of a settlement happens asynchronously. 
//In other words: the callbacks of then() and catch() are always executed after the current code is finished.

//The following code demonstrates how that works:

async function asyncFunc() {
    console.log('asyncFunc() started synchronously'); // (A)
    return 'abc';
}
asyncFunc().
then(x => console.log(`Asynchronously Resolved: ${x}`)); // (B)
console.log('Current code is finished'); // (C)

// asyncFunc() started synchronously
// Current code is finished
// Asynchronously Resolved: abc

//You can rely on the following order:

//Line (A): the async function is started synchronously. The async function’s Promise is resolved via return.
//Line (C): execution continues.
//Line (B): Notification of Promise resolution happens asynchronously.


//Async functions: Returned Promises are not wrapped

//you can return a Promise and that Promise won’t be wrapped in a Promise

async function myFunction() {
    return Promise.resolve('Porsche');
}

myFunction().then(x => console.log(x)); //Porsche

//Returning a rejected Promise leads to the result 
//of the async function being rejected (normally, you’d use throw for that)

async function myFunction() {
    return Promise.reject(new Error('Error!'));
}

myFunction().catch(err => console.error(err)); //Error!

//That is in line with how Promise resolution works. 
//It enables you to forward both fulfillments and rejections of another asynchronous computation, 
//without an await:

async function getBrandAsync() {
    return 'Porsche';
}

async function myFunction() {
    return getBrandAsync();
}

myFunction().then(x => console.log(x)); //Porsche

//The previous myFunction code is roughly similar to – but more efficient than – the following code 
//(which unwraps the Promise of getBrandAsync() only to wrap it again)

async function myFunction() {
    return await getBrandAsync(); //notice the await
}

//Tips for using await: Don't forget await
//In the following example, brand is set to a Promise, 
//which is usually not what you want in async functions.

async function getBrandAsync() {
    return 'Porsche';
}

async function myFunction() {
    const brand = getBrandAsync(); // missing await!
    console.log(brand);
    console.log('myFunction ends.');
}

myFunction();

//Promise { 'Porsche' }
//myFunction ends.

//The following example didn't work as I expected. More tomorrow.
////Tips for using await: Don't forget await 2
//await can even make sense if an async function doesn’t return anything. 
//Then its Promise is simply used as a signal for telling the caller that it is finished.

async function step1() {
    console.log('Executing step 1.');
    console.log('Step 1 done.');
}

async function step2() {
    console.log('Executing step 2.');
    console.log('Step 2 done.');
}


async function myJob() {
    await step1();
    step2();
    console.log('Finished executing steps');
}

myJob();
//step 1
//Finished executing steps
//step 2





