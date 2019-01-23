function usingRegex(str) {
    return /[0-9a-zA-Z]/.test(str)
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

console.log(usingRegex("hello987"))
console.log(UsingcharCodeAt("h"))

