//undefined is the default return value, when we dont return anything explicitly
//Our Async function will always, always, always return Promise
//That promise is resolved with the value that developer choosed to return from function
//.catch() handler is going to run if the promise comes back from async function reject
//this promise is going to reject if we the developer choose to throw error from function
/*
const processData = async () => {
    //return 12; //Promise { 12 }
    //throw new Error('Something went wrong')
}

//console.log(processData());

processData().then((data) => {
    console.log('Data ', data);

}).catch((error) => {
    console.log('Error ', error);
})
*/

//async and await in action(simulating it)

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
});


const processData = async () => {
    let data = await getDataPromise(2)
    //let data = await getDataPromise('string')//(Error  Number must be provided)
    data = await getDataPromise(data)
    console.log(data);
    return data;
}



processData().then((data) => {
    console.log('Data ', data); //Data  8

}).catch((error) => {
    console.log('Error ', error); //Error  Number must be provided
})

/*
With async await operator we can structure our code that uses our promises
to look more like regular old synchornous code, we perform one operation after
the other, code at line no 33 is never going to run untill the code at line no
32 get resolve or reject, code at line no 35 return statement wont run untill
the line no 33 get resolve or rejects
*/


//async await challenge

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json();
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }
}



//second example
const getLocation = async () => {

    const response = await fetch('http://ipinfo.io/json?token=282aa81422f233')

    if (response.status === 200) {
        //here we need response directly so we can return it here, its valid way
        return response.json();
    } else {
        throw new Error('Unable to get the current location');
    }

}


// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
// }).catch((err) => {
//     console.log(`${err}`)
// });

//creating a function that combines our other aysnc functions
const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country;
    //we can also do and will have same effect ang it get the job done
    //neither faster or slower they still have to wait for http request
    // return getCountry(location.country)
}

getCurrentCountry().then((country) => {
    console.log(country.name); //India
}).catch((error) => {
    console.log(error);
})