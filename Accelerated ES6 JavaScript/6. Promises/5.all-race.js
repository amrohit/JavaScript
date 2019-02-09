let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved!');
    }, 1000)
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Rejected!');
    }, 2000)
});

Promise.all([promise1, promise2])
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    })

//what is Promise.all()
/*
If all the promises in array get resolve only then we will
get the output
so here all the promise will have to resolve or else we will get Reject 
even if any promise got failed
*/

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved!');
    }, 1000)
});

let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Rejected!');
    }, 2000)
});

Promise.race([promise3, promise4])
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    })

/*
What is Promise.race()
if any one of the promise which gets resolved as first or 
we can say early, the overall promise will be result in Resolved
in this case promise3 which is taking only 1000 millisecond(1s)
so output is Resolved 
Note: But if the faster promise get failed the entire promise will result
in Reject 

*/