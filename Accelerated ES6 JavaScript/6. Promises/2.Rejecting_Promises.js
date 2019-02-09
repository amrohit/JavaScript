let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Failed!');
    }, 1500)
})

promise.then(function (value) {
    console.log(value); //Done!
}, function (error) {
    console.log(error)//Failed!
})