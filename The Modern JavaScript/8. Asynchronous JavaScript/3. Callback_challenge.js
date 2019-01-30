//Callback challenge

const getCountry = (countryCode, callback) => {
    const countryCode = "IN";
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState == 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find((country) => country.alpha2Code === countryCode);
            console.log(country.name); //India
            callback(undefined, country.name);
        } else if (e.target.readyState == 4) {
            console.log('Unable to fetch the data');
            callback(`Some error while fetching dta`, undefined);
        }

    })
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
    countryRequest.send();
}

getCountry('IN', (error, country) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Countr name: ${country.name}`);
    }
})