/*
    Sliding Window Pattern

 write a function called maxSubarraySum which accepts an array of intergers
 and a number called n. The function should calculate the maximum sum of n
 consecutive elements in the array
eg: example given
maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2],4) //13
maxSubarraySum([], 4) //null

*/
 //starting with my Naive solution
function maxSubarraySumDemo(arr, num) {
    if ( num > arr.length) {
            return null;
        }
    let maxSum = 0;
    let bigNum = 0;
    for (let i = 0; i < arr.length - num+1; i++) {
        for (let j = i; j < i + num; j++) {
          console.log(arr[j],i + num);
          maxSum += arr[j]; 
        }
        if(maxSum > bigNum) {
        bigNum = maxSum;
        }
        maxSum = 0;
    }
    
    return bigNum;
}

console.log(maxSubarraySumDemo([1,2,5,2,8,1,5], 3)) //15


//starting with official naive solution
    
    function maxSubarraySumOff(arr, num) {
        if ( num > arr.length) {
            return null;
        }
        var max = -Infinity; //working with negative value too
        for ( let i = 0; i < arr.length - num + 1; i++) {
            temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr[ i + j];
            }
            if ( temp > max) {
                max = temp;
            }
        }
        return max;
    }

    console.log(maxSubarraySumOff([1,2,5,2,8,1,5], 3)); //15


    //Using windows slidding pattern
    function maxSubarraySum(arr, num) {
        let maxSum = 0;
        let tempSum = 0;
        if (arr.length < num) return null;
        for ( let i = 0; i < num; i++ ) {
            maxSum += arr[i];
        }  
        tempSum = maxSum;
        for (let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    }

    console.log(maxSubarraySum([1,2,5,2,8,1,5], 3)) //15