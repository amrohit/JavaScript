function getUnique(arr) {
  return arr.filter((v,i) => arr.indexOf(v) == i)
}

let arr  = [1,2,2,3,3,5];
console.log(getUnique(arr));

function getUnique2(arr) {
  let freqencyCounter = {}
  for (let i = 0; i < arr.length; i++) {
    freqencyCounter[arr[i]] = (freqencyCounter[i] || 0 ) + 1;
    
  }
  return Object.keys(freqencyCounter);
}

console.log(getUnique2(arr));

//Lets try the same using Multiple Pointer solution 
function getUnique3(arr) {
  let i = 0;
  for (let j = 1 ; j < arr.length; j++) {
    if (arr[i] != arr[j])  {
       i++;
       arr[i] = arr[j];
    }  
    
  }
  console.log(i);
  return arr.slice(0,i+1) //i at index 3, so elem length will be 4
}

console.log(getUnique3(arr));
//[1,1,2,3,3,4]