/*
write a function called same
which accepts two arrays. 
The function should return true if every value in the array 
has it's corresponding value squared in the second array.
The frequency of values must be the same
eg:
same([1,2,3], [4, 1, 9]) //true
same([1,2,3], [1,9]) false
same([1,2,1], [4,4,1]) //false (must be same frequency)
*/

//Naive approach
function sameDemo(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        //O(N)
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        //O(N)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(sameDemo([1, 2, 3], [1, 4, 9]))
//true // O(N ^ 2)

//REFACTORED frequencyCounter pattern O(n)

function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    //{1: 1, 2: 2, 3: 1} {1: 1, 4: 2, 9: 1}
    console.log(frequencyCounter1, frequencyCounter2);

    for (let key in frequencyCounter1) {
        console.log(key)
        if (!(key ** 2)in frequencyCounter2) {
            return false;
        }
        //{2: 2=>} == {4: =>2}
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameRefactored([1, 2, 2, 3], [1, 4, 4, 9]))
//true O(n)
