//Using Fetch

//fetch return promise
fetch('http://puzzle.mead.io/puzzle', {})
    .then((response) => {
        if (response.status === 200) {
            //we will be getting promise
            //we better return this promise to use then at last instead of using it here
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        console.log(data.puzzle); //Letter Tiles In A Drawstring Bag
    })
    .catch((error) => {
        console.log(error);
    })