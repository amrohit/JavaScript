const person = function () {

}

const me = person();

console.log(me); //undefined (retured explicitly since nothing retured)

/*
const Person = function () {
    console.log(this); //Person {}
}
//Initialization of Properties of our object
const Me = new Person();

console.log(Me); // Person{}

*/

/*Convetion : use UpperCase to define a constructor function
so users can understand that it should be called with new keywrd
we dont have to return anything from constructor function
since adding new operator, we are getting the object with initialized properties stored on the Me without adding return value 
since it new operator created a new object and  returned its value implicitly but
still we can overwrite that explicitly using return {} but is not
recommended. 
Well the whole point of constructor function is to set up a new object and get access to it 
*/
const Person = function (firstName, lastName, age) {
    console.log(this); //Person {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
//Initialization of Properties of our object
const Me = new Person("Rohit", "Sharma", 25);

console.log(Me);
//Person { firstName: 'Rohit', lastName: 'Sharma', age: 25 }
console.log(Me.age); //25

//setting up new object with different properties
const person2 = new Person("Khusi", "Raj", 18)
console.log(person2);
//Person { firstName: 'Khusi', lastName: 'Raj', age: 18 }