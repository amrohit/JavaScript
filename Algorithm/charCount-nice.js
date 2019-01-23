function charCount(str) {
    const obj = {}
    for (let char of str) {
        char = char.toLowerCase();
        //using regex result is slowness
  if (UsingcharCodeAt(char)) {
    
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
            //above lines were replaced with below one
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

 function UsingcharCodeAt(char) {
    let code = char.charCodeAt(0) //also work char.charCodeAt();
    //string.charCodeAt(index)
    if (!(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper Alpha (A-Z)
    !(code > 96 && code < 123)//lower alpha(a-z) 
    ) {
        return false;
    }
    return true;
}

//{1: 2, 2: 1, h: 1, e: 1, l: 2, o: 2, b: 1, …}
console.log(charCount("Hello bRo! 121"))