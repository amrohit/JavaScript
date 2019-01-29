//Setting up the prototype of the object

/*
Now we dont have make each person unique but same, and for this we 
will have sets of methods which will be shared with sets of instance of
Person
*/

//Prototypal Inheritence

const Person = function (firstName, lastName, age, likes = []) {
    console.log(this); //Person {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

//lets add a method on Person so it can be shared to both instances
//for this we will define our methods or props over Person prototype

Person.prototype.getBio = function () {

    let bio = `${this.firstName} is ${this.age}`
    this.likes.forEach((like) => {
        //=> function uses this value what their Parent holds
        //traditional function holds global scope value
        bio += ` ${this.firstName} likes ${like}`
    })
    return bio;
}
Person.prototype.location = 'India';
Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const person = new Person("Rohit", "Sharma", 25, ["Coding", "Jokes"]);

console.log(person);
console.log(person.getBio())
//Rohit is 25 Rohit likes Coding Rohit likes Jokes
console.log(person.location); //India
person.setName("Amit Sharma")
//Amit is 25 Amit likes Coding Amit likes Jokes
console.log(person.getBio()); //Amit is 25
person.getBio = function () {
    return `This is fake`;
}
console.log(person.getBio()); //This is fake

const person2 = new Person("Khusi", "Raj", 18)
console.log(person2.getBio()); //Khusi is 18
console.log(person2.location); //India