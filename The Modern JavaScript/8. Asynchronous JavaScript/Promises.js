const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data');
        //callback('This is error', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the Resolved Data');
        //reject('This is Error');z
    }, 2000);
})

//calling the promise
myPromise.then((data) => {
    console.log(data)
}, (err) => console.log(err));