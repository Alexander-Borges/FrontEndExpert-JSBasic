/* 
Object 
The base non-primitive data structure of JS used to store key-value pairs. Object keys are usually strings, but they can also be symbols. Values on the other hand can be any type.
*/
const myKey = 'key';
const website = {
    name :'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    isAwesome: true,
    'mult word key': 0,
    [myKey]: 1234,
};
console.log(website);
// Dot notation will print out individual key
console.log(website.name);
// bracket notation also works but need to make the key a string. Helps when there is a dash in the key.
console.log(website['rating']);


website.name = 'FrontEndExpert';
console.log(website.name);
// Worth noting that even though the object is a const, properties inside the object can still be changed

// We can add new key value pairs simply with dot notation after the object
website.foo = "bar";
console.log(website);

// We can remove key values with the delete function as well.
delete website.foo;
console.log(website);

// object literal syntax
const obj = new Object();
obj.name = "Alex";
console.log(obj);

function Website(name,rating,founders){
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}
const frontEndEx = new Website('FrontendExpert',5,['Conner']);
console.log(frontEndEx);

// Symbols - Unique identifiers
// hidden from iteration functions

const id = Symbol("id");
const id2 = Symbol("id");
const symObj = {
    [id]: 1234,
};

console.log(symObj);
console.log();

// get
const getWebsite = {
    name:  'AlgoExpert',
    rating:  5,
    founders: ['Clem', 'Antoint'],
    sayHello(){
        console.log('hello');
    },
    get getRating(){
        return this.rating;
    },
    // can upadate the values in the object
    set setRating(value){
        this.rating = value;
    }
};

getWebsite.sayHello();
console.log(getWebsite.getRating);
getWebsite.setRating = 6;
console.log(getWebsite.getRating);
console.log();

// Inheritance
const inheritedObj = {
    foo:'bar',
    [Symbol('id')]: 0,
    __proto__: website
};

Object.entries(inheritedObj).forEach(function(value){
    console.log(value);
})

console.log(Object.keys(inheritedObj));
console.log(Object.values(inheritedObj));
console.log(Object.entries(inheritedObj));

for (key in inheritedObj){
    console.log(key);
}

// copying objects
const myObj = {
    original: 123,
};

Object.assign(myObj, obj );
console.log(myObj);

//.freeze() makes elements in an object immutable.
// also prevents adding elements to an object
// isFrozen() is a boolean check if an object is frozen.
// seal() works similarly. Values can still be changed but not added
// isSealed()is a boolean check that works the same way.