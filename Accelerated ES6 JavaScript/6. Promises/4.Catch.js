function waitASecond(seconds) {
    return new Promise(function (resolve, reject) {
        if (seconds > 2) {
            reject('Rejected!');
        } else {
            setTimeout(function () {
                seconds++;
                resolve(seconds);
            }, 1000);

        }
    });
}

waitASecond(3)
    .then(waitASecond)
    //the value is automatically passed to waitASecond function
    .then(function (seconds) {
        console.log(seconds);
    })
    .catch(function (error) {
        console.log(error);
    })