/*
ANAGRAMS

Given two strings, write a function to determine if the second string is 
an anagram of the first. An anagram is a word, phrase or a name formed by 
re-arranging the letters of another, such as cinema, formed from iceman

validAnagram('', '') //true
validAnagram('aaz', 'zza')/ false
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car')
*/

function demoValidAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1, frequencyCounter2)

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
}
    return true;
}

//demoValidAnagram('', '');//true
//demoValidAnagram('rat', 'tar') //true
//demoValidAnagram('raat', 'taar') 


//Below one is the solution from author which passed the test

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

   const lookup = {};

   for (let i = 0; i < first.length; i++) {
       let letter = first[i];
       //if letter exists, increment, otherwise set to 1
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }
   console.log(lookup);
   for (let i = 0; i < second.length; i++) {
        let letter = second[i];
       if(!lookup[letter]) {
           return false;
       } else {
           lookup[letter] -= 1;
       }
    console.log("lookup second", lookup)
   }
   return true;
}

validAnagram('raat', 'taar') 

/*
{r: 1, a: 2, t: 1}
anagramProblem:63 lookup second {r: 1, a: 2, t: 0}
anagramProblem:63 lookup second {r: 1, a: 1, t: 0}
anagramProblem:63 lookup second {r: 1, a: 0, t: 0}
anagramProblem:63 lookup second {r: 0, a: 0, t: 0}
*/