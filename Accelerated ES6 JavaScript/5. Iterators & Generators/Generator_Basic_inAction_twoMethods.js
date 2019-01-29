//Generator Basic

//function* , function * , *select
function *select() {
  yield "Rohit";
  yield "Mohit";
}

//Generator are closely tied with Iterator concept
select()
//by running Generator we get  back Iterator
//an object through which we can loop

let it = select();
console.log(it.next());//{value: "Rohit", done: false}
console.log(it.next());//{value: "Mohit", done: false}
console.log(it.next());//{value: undefined, done: true}

/*
So we are looping thorugh those yield values
and thats what Generator is for and where it is powerful. It allows us to create a logic contained in a function to yield different values and then we can use an iterator or Iterator it will return to loop through or chuncks thorugh the value those generator gives us 
*/

//---------------------------------

//Generator in Action
//we have a objct and iterator symbol to make it iteratable
let obj = {
  [Symbol.iterator]: gen
}

function *gen() {
  yield 1;
  yield 2;
}

for (let element of obj) {
  console.log(element);//1,2
}
/*
what we see that 1 and 2 are using at generator and iterator will return us an object to loop through it. 
1. we gota kind of out source our generator
2. using yield keyword, it is much easier to manage the state and also imagine the possiblites it offers to us as using Generator we might also do some let say synchronous task which yield those results step by step like facing from the server anything like that. so With Generator we would yield those results we could then use them take advantage of step by step appraoch instead of having several functions which runs from start to finish
*/
//Ofcuse we still dont have to use for loop, we can also just extract the iterator from our object here generator and we can also pass the argument

function *gen2(end) {
  for (let i = 0; i < end; i++) {
    yield i;
  }
}

let its = gen2(2);

//console.log(its.next());//{value: 0, done: false}
//console.log(its.next());//{value: 1, done: false}
//console.log(its.next());//{value: undefined, done: true}


//------------------------------

//On our iterator we can also use two more methods

console.log(its.next());//{value: 0, done: false}
//console.log(its.throw());//Uncaught undefined
//console.log(its.throw('An error occured'));// Uncaught An error occured
//skiping below line from above error
console.log(its.next());//{value: undefined, done: true}


//Handling the error to continue after errror


function *gen3(end) {
try{
    for (let i = 0; i < end; i++) {
    yield i;
  }
} catch(e) {
  console.log(e);
}
}

let itss = gen3(2);

console.log(itss.next());//{value: 0, done: false}

console.log(itss.throw('An error occured'));// Uncaught An error occured

//overwriting the value here error incase
console.log(itss.return('An error occured'));//{value: "An error occured", done: true}
console.log(its.next());//{value: undefined, done: true}

