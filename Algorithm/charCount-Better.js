function charCount(str) {
    let obj = {};
    //let charArr = str.split();
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[str[i]] = 1;
            }
        }

    }
    return obj;

}

charCount("Hello Rohit 1213");
