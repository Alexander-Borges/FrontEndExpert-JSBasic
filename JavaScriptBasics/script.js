/*
Multi-Paradigm Language 
- Event-driven: Respond to events
- Functional: Pure Functions, first-class functions
- Object-oriented: Custon Objects with inheritance
- Imperative: Specify logic & control flow
- Declarative: Specify desired output
*/
let num = 10;
console.log(num);

// will reassign the variable num
num = 20;
console.log(num);

// Assigns a const - cannot change values
const newVal = 10;
console.log(10);
console.log();

//.floor function rounds down
let floorNum = 10.8;
console.log(Math.floor(floorNum));
console.log();

//.round function rounds to the nearest number
let roundNum = 10.4
 console.log(Math.round(roundNum));
 console.log();

 //.random function will provide a random number between 0 and 1
console.log(Math.random());
console.log();

// Number(constructor) converts the value of the string into a number if it is a valid digit
let strNum = '10.8';
 console.log(Number(strNum));

 // parseInt removes character from integer.
 // Note that it will remove any decimals from the value 
 let parsedNum = '10.8px';
 console.log(parseInt(parsedNum));
 console.log();

 //parsefloat will keep the decimal in the value
 let floatNum = '10.8px';
 console.log(parseFloat(floatNum));
 console.log();

// Can use exponents using Math.pow(a,b)
console.log(Math.pow(2,3));
console.log();

// typeof checks data type
let str = 'abcd';
console.log(str + 'efg');
//.includes checks if the string includes a character
console.log(str.includes('b'));

// slice(start,end): Extracts a portion of a string from the start index up to(but not including) the end index
console.log(str.slice(2,4))

// trim function eleminiates white space. 
// trimStart() trims the start
// trimEnd() trims the end

//obects - key value pairs
const person = {
    name: 'Conner',
    course: 'Frontend Expert',
};

console.log(person.name);

// map() function creates the new key value pair funcion
const map = new Map();
map.set(123,'Alex');
console.log(map.get(123));
console.log();

// Sets store a collection of unique values
const set = new Set();
set.add('hello');
set.add('world');
console.log(set.has("hello world"));
console.log(set.size);
console.log();

// functions
function addTwo(functionNumber){
    return functionNumber + 2;
}

