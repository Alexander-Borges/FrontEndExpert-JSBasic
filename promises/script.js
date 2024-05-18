// a promise is an object that contains the value of an asynchronous operation
// the object has a state and that state can have one of 3 values
// state -> pending, fulfilled, rejected
// pending value still pending
// fulfilled means operation was sucessful
// thrown an error - ie: webserver request never came back or came back with error

// pending is the default state
/*const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> reject(new Error("Something went wrong")), 1000);
});

console.log(promise);*/

// functions that return a settled promise
const promise = Promise.resolve(3);
console.log(promise);
//setTimeout(() => console.log(promise),1500);

// takes in an array, here is an array of promises
Promise.all([
    Promise.resolve(3),
    Promise.resolve(5)
]).then(console.log);

// promise.race takes in whichever promise resolves first
// promise.any checks all promises

// waits for the promise to settle
// waits for the state to change away from pending
//promise.then(console.log).catch(error => console.log("Oh No " + error));
// examples of chaining
promise
.then(value => value * 2)
.then(value=> value + 1)
.then(value => {
    throw new Error("Something went wrong");
})
.then(console.log)
.catch(error => {
    console.log("oh no " + error);
return 10;
})
 .then(console.log)
 // takes no parameters to its callback function but will always run regardless if the promise was fulfilled or rejected
 .finally(() => console.log("Done"));

// async implicitly returns a promise
// allows us to use the await keyword
// it waits for the promise to settle before it continues running its code
// try catch block to check for errors
 async function tester(){
     const value = await new Promise((res,rej) => setTimeout(()=> res(3), 1000));
     console.log(value);
 }

tester();