const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            console.log(data);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            console.log('An Error has taken place');
            callback(`Request is ${e.target.status}`, undefined)
        }
    });
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
}
getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }

})