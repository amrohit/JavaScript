//Iterator & Generator

let array = [1, 2, 3]


/*
we have another such well known built-in Symbol which actually is the  iterator this array object have. So an Array is iteratable, an object is iteratable if it has a certain well known Symbol built-in, this is javascript way of knowing that you actually can loop over of it
  Symbol.iterator is well known built in Symbol
*/

//so the value of that property that has this symbol is a "function", so we have iterator which seems to be exists otherwise we could have got error, so we have an Iterator function which is used when we loop through this array
console.log(typeof array[Symbol.iterator]); //function

//lets assing this to a variable and exectue

let it = array[Symbol.iterator]();
console.log(it);
/*
__proto__: Array Iterator
next: ƒ next()
Symbol(Symbol.toStringTag): "Array Iterator"
__proto__:
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
__proto__: Object
*/

//so we can it has next() method over it. lets call it

console.log(it.next()); //{value: 1, done: false}
console.log(it.next()); //{value: 2, done: false}
console.log(it.next()); //{value: 3, done: false}
console.log(it.next()); //{value: undefined, done: true}

//so done is only true, when it has really exhausted all the value in the collection

//------------------------------------------------

//Iterator in Action ****


//so why this iterator is useful here
/*
for the two reasons here:
1. you can make any object iteratable here, what we need to do is just implements this Symbol here Symbol.iterator
and then it will allow you to loop through that which will allow you to loop through your own Object.
2. You could also over write the behaviour, let see below example

*/

let arr2 = [1,2,3];
//above we get back Symbol.iterator from array and behind the scene  if we do not exectue the it = ...(), we will get back an object we get back from that function. so what we could is
arr2[Symbol.iterator] = function () {
  return {
    next: function() {
    return {
      done: false,
      value: 10
    } 
      }
  }
} 
let newIt = arr2[Symbol.iterator]();
//we could value is 10 and done is always been false
console.log(newIt.next());//{done: false, value: 10}
console.log(newIt.next());//{done: false, value: 10}
console.log(newIt.next());//{done: false, value: 10}
console.log(newIt.next());//{done: false, value: 10}


let arr3 = [1,2,3];
//above we get back Symbol.iterator from array and behind the scene  if we do not exectue the it = ...(), we will get back an object we get back from that function. so what we could is
arr3[Symbol.iterator] = function () {
  let nextValue = 10;
  return {
    next: function() {
    nextValue++
    return {
      done: nextValue > 13 ? true : false,
      value: nextValue   
      } 
    
      }
  }
} 
let anotherIt = arr3[Symbol.iterator]();
console.log("-----");
// console.log(anotherIt.next());//{done: false, value: 10}
// console.log(anotherIt.next());//{done: false, value: 10}
// console.log(anotherIt.next());//{done: false, value: 10}
// console.log(anotherIt.next());//{done: true, value: 10}
for (let elem of arra) {
  console.log(elem);
}

