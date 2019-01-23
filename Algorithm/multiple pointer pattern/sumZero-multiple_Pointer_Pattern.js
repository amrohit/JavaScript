/*
 Multiple Pointer Pattern

 write a function called sumZero which accepts a sorted array of intergers.
 The function should find the first pair where the sum is 0. Return an 
 array that includes both values that sum to zero or undefined if a pair does not
 exist
 sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
 sumZero([-2, 0, 1, 3]) //undefined
 sumZero([1,2,3]) //undefined
*/

//Naive version but not better

function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(arr[i],arr[j]);
            if(arr[i] + arr[j] === 0) {
                return (arr[i], arr[j]);
            }
        }
    }
}

sumZeroNaive([-5,1,2,3,5]);


//bette solution after Refactoring code

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];;
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
             right--;
        } else {
            left++;
        }
    }
}

sumZero([0,1,2,3,4,5])


