function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

//subtotals([1,2,3,4,5])//[1, 3, 6, 10, 15]


function getSubTotal(array) {
    var subTotalArray = Array(array.length);
    for ( let i = 0; i < array.length; i++ ) {
        let sumTotal = 0;
        for (let j = 0; j <= i; j++) {
//             sumTotal += j; mistake
              sumTotal += array[j];
        }
        subTotalArray[i] = sumTotal;
    }
    return subTotalArray;
}
getSubTotal([1,2,3])
