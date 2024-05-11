//  arrays can have any data types inside but generally advised to keep the same data types
const arr = [1,2,3];
console.log(arr);

// new Array() constructor will create a new array as well. 
const arr2 = new Array(1,2,3,4);
console.log(arr2);
// worth nothing that new Array() with only 1 value will create an array with the value inside the parenthesis 
const emptyArr = new Array(5)
console.log(emptyArr);
//.fill() function will fill those empty items. Worth noting if this comes up in interviews to initialize an array with zeros to start.
const filledArr = new Array(7).fill(0);
console.log(filledArr);
console.log();


// JS indexes through arrays like most other languages beginning at 0;
const indexedArr = [1,2,3]; 
console.log(indexedArr);

// includes() function checks if an array includes an element in the array
console.log(indexedArr.includes(3));// This is true because 3 is in the array
console.log();
// indexOf() function checks one and only first element of array that matches with the value in the parenthesis
console.log(indexedArr.indexOf(3));

// Conversely lastIndexOf() does the opposite and checks values from right to left.
const lastIndexedArr = [1,2,3,3];
console.log(lastIndexedArr.lastIndexOf(3));// prints out the 4th element in the array
console.log();
// push() adds elements to the end of the array
const pushedArr = [1,2,3,];
pushedArr.push(4);
console.log(pushedArr);

// pop() conversely does the opposite and removes elements from the end of the array.
pushedArr.pop();
console.log(pushedArr);
console.log();
// Both can be used at the same time

// unshift() function adds elements to the beginning but best to avoid as it is far less efficient
// the array becomes 0(n) because every element in the array changes

// .shift() will remove the first elemetn of the array

// instanceOf Array operator checks if object is an array.
// Don't quite understand how this is useful yet

// Deleting and replacing elements we use splice()
const splicedArr = [1,2,3];
splicedArr.splice(0,2);
// first parameter is the index and second is the number of elements to delete
// therefore starting at the values 1 and 2 are deleted
console.log(splicedArr);
console.log();

// Splice is versatile because elements can be added at any positon in an array. Efficiency concerns will exist for larger array but it works when you need it. 0(n) for reference


// slice function() similar to substring function but for arrays
// Creates a new array while keeping the original intact.
const slicedArr = [1,2,3];
const newArr = slicedArr.slice(0,2);
console.log(newArr);
console.log();

// concat adds 2 arrays while keeping original intact
smallArr = [1,2,3];
const concatArr = smallArr.concat(["hello","world"]);
console.log(concatArr);


// .reverse() pretty self explanatory


// join() function turns elements into a string
joinedArr = [1,2,3];
console.log(joinedArr.join("  |  "));
console.log(joinedArr);
console.log();

// looping through elements in arr;
const loopedArr = [1,2,3];
for (let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log();

// filter() function returns values with a condition
const filtered = [1,2,3];

const filteredArr = filtered.filter(function(value,index,array){
    return value > 1;
}, {num: 1});

console.log(filtered);
console.log(filteredArr);

// find() finds the first value that matches the element
// findIndex() finds the index that matches the element condition

// sum of an array
const arrSum = [1,2,3];
const sum = arr.reduce(function(accumulator, currValue){
    return accumulator + currValue;
}, 0);
console.log();
console.log(arrSum);
console.log(sum);

// sorting arrays
const sortedArr = [5,7,3,0];

arr.sort(compareNumbers);

function compareNumbers(firstNumbers,SecondNumbers){
    if (firstNumbers === 3){
        return -1;
    }
    return SecondNumbers - firstNumbers;
}
console.log(sortedArr);