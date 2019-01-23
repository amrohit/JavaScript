function printAtMost5(n) {

   for(let i = 0; i <= Math.min(5, n); i++) {
       console.log(i);
   }
}

printAtMost5(3) // 1 to 3
printAtMost5(10) // 1 to 5