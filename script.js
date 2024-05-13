console.log(5 == 5);//loose equality, values
console.log(5 === 5);// strict equality, type and values
console.log();

console.log(5 == '5');//implicit type coercion
console.log(5 === '5');


console.log(Number(false));

console.log(Number('abc'));
console.log(NaN == NaN);// Not a number will never be equal to anything else including itself
console.log()

console.log(null == null);
console.log(null == undefined);// returns true

console.log({} == {}); // returns false
// not necessarily the EXACT SAME object;
// yes both objects but not the same object;


