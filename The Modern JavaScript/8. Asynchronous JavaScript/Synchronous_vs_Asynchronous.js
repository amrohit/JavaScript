//For synchornous request
const getPuzzleSync = () => {
    const request = new XMLHttpRequest();

    //GET, URL, true(async)/false(sync)
    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false);
    request.send();
    //The codes below are not going to run untill the server responds with data. So we dont have to rely on EventListener
    //Your entire browser will be locked down while these request were been performing. So you cant interact with your UI elements
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.puzzle;
    } else if (request.readyState === 4) {
        console.log('An Error has taken place');
        throw new Error('Something wrong...');
    }
}