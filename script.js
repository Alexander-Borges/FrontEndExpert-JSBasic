const arr = [1,2,3,4];

const doubleed = arr.map(double);

function double(num){
    return num * 2;
}

console.log(doubleed);

const newArr = [1,2,3,4];
const newDoubled = newArr.map(num=> num * 2);// anonymous function but more efficient code.


console.log(newDoubled);
console.log();


const destArr = [1,2,3,4];
const [firstValue, secondValue,...rest] = destArr;// Can print values on a single line
const first = arr[0];
const second = arr[1];
console.log(first, second);
console.log(rest);// Gives us an array of the rest of the values
console.log(firstValue,secondValue);
console.log()

const person = {
    name: "Conner",
    website: "FrontEndExpert",
};

const { name: firstName } = person;
console.log(firstName);
console.log();

//Destructuring when passing an object as a parameter to a function
function printName({name}){
    console.log(name);
}
printName(person);
console.log();

// spread operator
const spreadArr = [1,99,333,24];
const Spread2j = [5,6,7];

function add(x,y){
    console.log(x+y);
}

add(...spreadArr);

// template literals

const templateName = "Alex";

console.log("Hello " + templateName);
console.log(`Hello ${templateName} ${1 + 3}`);//better for multiple variables

// Short circuit evaluation
const shouldRunCode = true;

function logWorld(){
    console.log("Hello World");
}

shouldRunCode && logWorld();// Only runs if the left side is true
