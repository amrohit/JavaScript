const myFunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    }
    return printMessage;
}

const myPrintMsg = myFunction()
myPrintMsg(); //This is my message

/* 
Clousre?
we have not called myPrintMsg() untill after myFunction() has returned;
There is no way we have called myPrintMsg() untill myFunction() has completed;
our returned function printMessage has still access to its parent function variable message
So this is a closure

A closure is the combination of function with the lexial scope in which 
it was defined.
In this case,  where printMessage was defined, it has access to message
even myFunction get completed

we can take example of our earlier XLMHttpRequest where we could still
access the callback at time when function was already completed and waiting response and can still access the passed callback argument later
Without this, we would not have been able to do that

*/

//Using closure to create a private variable in JavaScript

const createCounter = () => {
    let count = 0;
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();
/* so what comes back is an object which has bunch of functions which is 
//using closure to access the outer variable counter
//End result will be the person who is using this tool cannot hack the system, they can only increment or decrement the counter by 1 or get
// There is no way to increment the count by 100 to cheat the system
There is no way to change the variable counter over to a string
it is only modifiable by sets of specefic function not other than this via
down below we can use those methods
*/

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get()); //2

//so we can set something using closure which can be only modifiable with an interface we defined


//lets take one more example

const createAdder = a => {
    return (b) => {
        //inner function can access a via closure
        return a + b;
    }
}

//using a closure to get job done. it also using another patter called cohering which means a process of tranforming a single function which takes a lot of arguments to multiple functions that takes subset of those arguements.
const add10 = createAdder(10);
console.log(add10(-2));
8
console.log(add10(20));
30