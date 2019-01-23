    /*
    Count Unique Values using Multile Pointer solution
    implement a function called countUniqueValues which accepts a sorted 
    array, and counts the unique values in the array, There can be
    negative numbers in the array, but it will always be sorted
        countUniqueValues[(1,1,1,1,1,2)] //2
        countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
        countUniqueValues([]) //0
        countUniqueValues([-2, -1, -1, 0, 1]) //4

    */
    //This is my try
    function countUniqueValuesDemo(arr) {
    let lookup = {};
       for (let i = 0; i < arr.length; i++) {
           lookup[arr[i]] = (lookup[arr[i]] || 0) + 1; 
       }
       return Object.keys(lookup).length;
    }

    console.log(countUniqueValuesDemo([1,1,1,5,5,7]))//3


//Lets try the same using Multiple Pointer solution 

    function countUniqueValues(arr) {
        if (arr.length === 0) return 0;
        let i = 0;
        for (let j = 1;  j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1; //7
    }
    
   countUniqueValues([1,1,1,2,2,3,4,5,5,6,7])