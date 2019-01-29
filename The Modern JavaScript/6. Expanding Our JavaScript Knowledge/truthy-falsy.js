const products = [{
    name: "Computer Science"
}];
const product = products[0];

/*
//Truthy - values that resolve to true in boolean context
Falsy - Values that resolve to false in boolean context
Falsy Values - false, 0, empty, string, null, undefined, NaN
*/

if (product) {
    console.log('product found');
} else {
    console.log('product not found');
}