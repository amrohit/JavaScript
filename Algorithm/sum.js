function sum(array){
      let sumTotal = 0;
      for (let i = 0; i < array.length; i++) {
            sumTotal += array[i];
      }
      return sumTotal;
}

console.log(sum([1,2,3,3,5]));