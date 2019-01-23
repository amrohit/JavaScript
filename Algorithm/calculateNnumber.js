/*write a function to calculates the sum of all numbers from 1 
up to n including some number n */

function calculateSum(n) {
    let totalNum = 0;
    for (let i = 1; i <= n; i++) {
            totalNum += i;
    }
    return totalNum;
}
//calculateSum(5); not so Good

//with second method 
var totalSum = 0;
function getSumOfN(n) {
    if(n !== 0) {
       this.totalSum += n;
       return getSumOfN(n-1)
    } else {
        return this.totalSum;
    }
}
//console.log(getSumOfN(5))

//more better with a math expression
function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(5));