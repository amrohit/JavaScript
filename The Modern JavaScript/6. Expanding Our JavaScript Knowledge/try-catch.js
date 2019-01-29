const getTip = amount => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw "Argument must be number";
  }
};

// const result = getTip(true)//1 * 0.25 = 0.25
//const result = getTip(true);
//console.log(result); //throw 'Argument must be number';

try {
  const result = getTip(true);
} catch (e) {
  console.log(`catch block is running`);
}
