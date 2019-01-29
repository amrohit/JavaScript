/*
Not everything in JavaScript is an Object

Primitive values => 5
string, number, boolean, null, undefined

Truely Primitive values, no access to props
null & undefined

Partial Primitive values: string,boolean,number

Object: myObject --> Object.prototype --> null
Array: myArray --> Array.prototype --> Object.prototype --> null
Function: myFunc --> Function.prototype --> Object.prototype --> null
String: myString --> String.prototype --> Object.prototype --> null
Number: myNumber --> Number.prototype --> Object.prototype --> null
Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
*/
console.log("Primitive_Objects.js");

//product --> Object.prototype --> null 

//defining an Object with literal syntax {}
/* when syntax of the language allows us to define a value of specefic type using a series of characters like opening and closing brackets {}, name left side colon value rightside,  name: value  */
const product = {
    name: 'Influence'
}

//hasOwnProperty (objects own property,not inherited)
console.log(product.hasOwnProperty('name')); //true
console.log(product.hasOwnProperty('price')); //false

console.log(product.hasOwnProperty('hasOwnProperty')); //false

console.log(product);
//product --> Object.prototype
console.log(product.__proto__.hasOwnProperty('hasOwnProperty')); //true
console.log(product.__proto__); //Object.prototype

//product --> Object.prototype --> null
console.log(product.__proto__.__proto__); //null



//Overwriting an existing Object prototype method
/*
Object.prototype.hasOwnProperty = () => 'This is a new function';

console.log(product.hasOwnProperty('hasOwnProperty')); //This is a new function

console.log(product.__proto__.hasOwnProperty()); //This is a new function

Object.prototype.someMethod = () => 'Some Method';

console.log(product.someMethod()) //Some Method


//similar to above

const product2 = new Object();
product2.name = "Rohit";
console.log(product2.name) //Rohit


//or

const product3 = new Object({
    name: 'An another way'
})

console.log(product3.name); //An another way
*/
//------------------Primitive Objects -2-----

/*
What is primitive values?
A Primitive value is a value that doesnt have properties. they are non Object.

There are 5 primitive values in JS
string, number, boolean, null, undefined

Everyting what we dont have in the above list is an Object
Arrays and Function
lets see how Arrays and Function use prototype inheritence
*/


//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null

//only created array using literal syntax
const team = ["India", "USA"];
console.log(team);
//["India", "USA"], __proto__ :Array

//So Array is nothing but a customized version of an Object. we can prove this by accessing ...
console.log(team.hasOwnProperty('length')); //true
console.log(team.hasOwnProperty('filter'));
//false, since filter comes from Array.prototype but not on Array

//creating an array using new keyword ,not literal

const teams = new Array("India", "UK");
const teams2 = new Array(['India', 'Germany'])
console.log(teams, teams2);


//Function, customized behaviour, modified version of Object

//Function: myFunc --> Function.prototype --> Object.prototype --> null

//----Lets move to function and dump it to the console

const getScore = () => 1;
console.log(getScore);


//------ Truely Primitivevalues -> null & undefined (can never access any properties/Methods over it)

//but its little different with 
//string, boolean  and number
//At a same string has a method but its also not object

//String: myString --> String.prototype --> Object.prototype --> null

const pro = 'Computer';
console.log(pro.split(''));

/*So what is happening is behind the scene, 
when we are calling/accessing a property on string, it converts it to an object
 So string, boolean and number are primitive but what they also have a wrapper which is Object 
 This object wrapper provides all the functionality that we are seeing here eg split  */

const pro2 = new String('Rohit');
console.log(pro2); //String {"Rohit"}, __proto__:String