//282aa81422f233

const getLocation = () => {
    //we have to return the promise which would return another promise
    return fetch('http://ipinfo.io/json?token=282aa81422f233')
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unable to fetch new location');
            }
        })
}

//we are handling the response.json() promise using .then()
getLocation().then((location) => {
    console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
}).catch((err) => {
    console.log(`${err}`)
});