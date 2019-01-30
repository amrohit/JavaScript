/*Get pressed character from keyword
window.addEventListener('keypress', function (e) {
    console.log(String.fromCharCode(e.charCode));
});
*/

//HTTP (Hyper Transfer Protocol)
//Reqest - what we want to do
//Response - What was actually done


//Making an HTTP Request

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        console.log(e.target.responseText);
        const data = JSON.parse(e.target.responseText);
        console.log(data); //{puzzle: "Tough Love"}
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place');
    }
});
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();

//Another request
const countryCode = "IN";
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState == 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => country.alpha2Code === countryCode);
        console.log(country.name); //India
    } else if (e.target.readyState == 4) {
        console.log('Unable to fetch the data');
    }

})
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
countryRequest.send();