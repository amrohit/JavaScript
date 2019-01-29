//Type Coercion in JavaScript(inconsistent Behaviour)
//with a string, a number , a boolean
console.log('5' + 5); //55 + with context( for addition(num) & concat(string))
console.log('5' - 5); //0 (we could not subract from string)

console.log(5 == 5); //true
console.log(5 === 5); //true
console.log('5' === 5); //false(coersing the string 5 in int since next value is int)
console.log('5' == 5); //true

console.log(true == 'true'); //false
console.log('true' === true); //false

console.log('false' == false); //false
console.log('false' === false); //false

console.log(true + true); //2 (1 + 1)
console.log(false + true); //1 ( 0 + 1)

console.log(false - true); // -1 (0 - 1);

console.log(typeof {}); //object
console.log(typeof 123); //number

const value = true + 12;
const type = typeof value;
console.log(type, value); //number 13

console.log(typeof (true + true)); //number

console.log(typeof (true && true)); //boolean