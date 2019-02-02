//Set: A set is list of values(not key value pair) but that is not array
//sicne you could have same value multiple time therefore positiong is
//important there

let array = [1, 1, 1];
let set = new Set([1, 1, 1]);

//adding a value to set(operation will be omitted if storing dublicate value )
set.add(2);
set.add(2);

for (element of set) {
    console.log(element);
}
//output is only 1,2 becuase of its uniqueness(before )

//Sets stores unique values, therefore ordering is not important
//since it holds unique values, we  can get it anyhow
//So set is like an array but it holds unique values

//delete value from set

set.delete(1);
//storing dublicate values will be omitted and deleting will remove value
for (element of set) {
    console.log(element);
}

//we dont have .get method over it

//we have .has() method
console.log(set.has(2)); //true

//we could entries method here (event though we dont have explict keys here)

for (elem of set.entries()) {
    console.log(elem); //[2, 2]//since keys are always the value here
}

for (elem of set.values()) {
    console.log(elem); //2
}
for (elem of set.keys()) {
    console.log(elem); //2
}