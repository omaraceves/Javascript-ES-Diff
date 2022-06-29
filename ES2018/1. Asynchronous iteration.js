//As seen on: https://exploringjs.com/es2018-es2019/ch_asynchronous-iteration.html#asynchronous-iteration

//ES6 Synchronous iteration
//Iterable: an object that signals that it can be iterated over, via a method whose key is Symbol.iterator.
//Iterator: n object returned by invoking [Symbol.iterator]() on an iterable. It wraps each iterated element in an object and returns it via its method next() – one at a time.
//IteratorResult: an object returned by next(). Property value contains an iterated element, property done is true after the last element.
//An example with array:

const iterable = ['Cayman 718', '911']; 
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); ////{ value: 'Cayman 718', done: false }
console.log(iterator.next()); //{ value: '911', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

//Asynchronous iteration
//Method next() of an async iterator returns Promises for IteratorResults (vs. IteratorResults directly).

async function* createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next()
.then(iterResult1 => {
    console.log(iterResult1); // { value: 'a', done: false }
    return asyncIterator.next();
})
.then(iterResult2 => {
    console.log(iterResult2); // { value: 'b', done: false }
    return asyncIterator.next();
})
.then(iterResult3 => {
    console.log(iterResult3); // { value: undefined, done: true }
});

//Within an asynchronous function, you can process the results of the Promises via await and the code becomes simpler

async function* createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

async function processAsyncIterable() {
    const asyncIterable = createAsyncIterable(['a', 'b']);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    
    let result = await asyncIterator.next();
    console.log(result);

    result = await asyncIterator.next();
    console.log(result);

    result = await asyncIterator.next();
    console.log(result);
}

processAsyncIterable();

//for-await-of
//an asynchronous version of the for-of loop: for-await-of

async function* createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

(async function f() {
    for await (const x of createAsyncIterable(['a', 'b'])) {
        console.log(x);
    }
})(); // a b

//above we are using a IAAFE Immediately Invoked Async Function Expression 'yafee' 'yafi'

//for-await-of and rejections
//the loop throws an exception if next() returns a rejection

function createRejectingIterable() {
    return {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            return Promise.reject(new Error('Problem!'));
        },
    };
}

(async function () { // (A)
    try {
        for await (const x of createRejectingIterable()) {
            console.log(x);
        }
    } catch (e) {
        console.error(e); // Error: Problem!
    }
})();

//for-await-of and synchronous iterables
//for-await-of handles synchronous iterables by converting them to asynchronous iterables.

//{ value: Promise.resolve(123), done: false } is converted to
//Promise.resolve({ value: 123, done: false })

//Therefore, the following two statements are roughly similar.

for (const x of await Promise.all(syncIterableOverPromises));
for await (const x of syncIterableOverPromises);

//The second statement is faster, because Promise.all() 
//only creates the Promise for the Array after all Promises in syncIterableOverPromises are fulfilled. 
//And for-of has to await that Promise. In contrast, for-await-of starts processing as soon 
//as the first Promise is fulfilled.

