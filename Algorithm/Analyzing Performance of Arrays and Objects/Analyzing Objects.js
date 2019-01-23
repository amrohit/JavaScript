var student = {
    name: "Rohit",
    age: 25,
    favNums: [1,2,3,4]
}
//console.log(student);

/*
Big O Notation: number of Operations is equal to number of inputs;
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)
*/

//for three props in obj, 3 operation performed so O(n);
Object.keys(student)//(3) ["name", "age", "favNums"]

//O(n)
Object.values(student)//(3) ["Rohit", 25, [1,2,3,4]]
Object.entries(student) //[["name", "Rohit"], ["age", 25],  ["favNums", [1,2,3,4]]]

//O(1)
/*
This is constant time, we are able to access the information in constant time
if we have the key age then we want value
we can also check, if key exists, which takes pretty same time
*/
student.hasOwnProperty('age') //true

//What is the big O for adding a key and value into an object? A: O(1)
//for each inputs, operation is constant to 1

//What is the big O for accessing a key in an object? A: O(1)

//What is the big O of removing a key in an object? A: O(1)