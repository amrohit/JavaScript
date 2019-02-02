//Maps and Sets

/*
Maps and sets are two new coins of collection introduced with es6
Untill now with es6 we probably aware we mostly got array, which basically allows to hold  multiple elements multiple values in the object in the variable at the end.
we also have object which have kind of collection with field value pair.

*/

//Map Objects => Map Objects basically stores a collection which  maps key value pairs
//we store objects in a map and we assign a unique key for which you can identify and retrieve it

let cardAce = {
  name: "Ace of Spades"
};

let cardKing = {
  name: "King of Clubs"
};

//here stack would be Map

let deck = new Map();
//anoather way
//let deck = new Map([['as', cardAce], ['kc', cardKing]])

//Settign object to map using unique key
deck.set("as", cardAce);
deck.set("kc", cardKing);

console.log(deck); //Map(2) {"as" => {…}, "kc" => {…}}
console.log(deck.size); // 2;
deck.set("as", cardAce); //overwrite the existing key value pair
console.log(deck.size); //2

//Accessing map data using key
console.log(deck.get("as")); //{name: "Ace of Spades"}

//Deleting data using key
//deck.delete('as')

//Accessing map  deleted data using key
//console.log(deck.get('as'));//undefined

//deck.clear() //clear all
console.log(deck); //undefined

console.log(deck.keys()); //MapIterator {"as", "kc"} kind of iterator

//.keys()
for (key of deck.keys()) {
  console.log(key); //as, kc
}

//.values()
for (value of deck.values()) {
  console.log(value); //{name: "Ace of Spades"}, {name: "King of Clubs"}
}

//.entries() get key value pair //using
for (entry of deck.entries()) {
  console.log(entry); //["as", {…}], ["kc", {…}]
  /*
  0: "as"
1: {name: "Ace of Spades"}
length: 2
__proto__: Array(0)
 
 //stored in the same way new Map([['as', cardAce], ['kc', cardKing]])
  */
}

//sicne entries method is kind of  obsolete

for (entry of deck) {
  console.log(entry); //["as", {…}] , ["kc", {…}]
}

//----------------------------------------------------------------------

//WeakMap

/*
In a WeakMap, our key only be a javascript object but not the primitive data type like string, we used in the above Map()

A WeakMap is weak map not becuase it cannot hold string as a key, but  because it hold weak referece to the entries in the map. That means it can get rid of those entries if it is not used any more through out your code so garbadge collected.
for that behavour however it needs to have refernced types as keys because those refernce types are the one which is  getting garbage collected and are the one which would take more memory.
Lets say we have stored object in an array or Map here, theoritically it is not available to cleaned up  because it is stored and dont really know if you are going to accessing it again or so it could not release it.

Therefore, a WeakMap allows to do that  by using object as keys it make sure that it can keep track of those objects if they are used any more. if you are trying to get item in the code but if you are not using any keys this object any more probably you are not fetching this any more and it able to delete those entries from the map. On its own it alters your map and it handled well by javascript.
It frees up your memeory and imporove the performacne of your application and it takes your work and mange the resource otherwise you need to manage your own resource.

Advatage of WeakMap -> performance increase , garbage collection
The disadvantge is that we need to use object as keys
WeakMap is not enumerable that means we could not use forloop over it
the reason is javascript  itself dont know the size of it. it dont know how it will look like at the certain stage of code execution bcause some item may have deleted. Looping is not possible but possible to get item using Ojbject as a key



*/

let key1 = {
  a: 1
};
let key2 = {
  b: 2
};

let decks = new WeakMap();

decks.set(key1, cardAce);
decks.set(key2, cardKing);
//we can access our object and its not garbage collected
console.log(decks.get(key1)); //{name: "Ace of Spades"}
//but we cant use size property or for loop here