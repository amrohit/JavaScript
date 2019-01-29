//use strict mode

/* 
strict mode makes it easier for us to write cleaner and more concise
 and less error prone code


const processData = () => {
    data = '1233443';
}

processData();
console.log(data); //1233443
*/
/*
So what is scope in javascript
when we run the above method,what it gonna do is
it will look for variable data in the local scope
if it could not find it then it
it gonna look in the global scope and if it could not  it there
it gonna create a variable data in a global scope.
so we can print it outside
-----
it is called Leaked Global
because we made some typo in our code, we are accidently 
creating a global variable, where we may have attended
to assign a value to new variable or define a local one.

This code runs without letting you know that anything weird 
happened in the regular mode.
lets go head and enable the strict mode check what happens

to enable strict mode you need to add the below line at top of page

'use strict' to run file in strict mode
*/

'use strict'
let data;
const processData = () => {
    data = '1233443';
}

processData();
console.log(data);
//ReferenceError: data is not defined at processData
//after let declaration
console.log(data); //1233443

/*
to fix this, define the scope of variable data we want
we can use let data either outside of function for global scope
for local define it inside the function and then we are not gonna
leak global variable anymore which is a good thing
------------------------------------------------------
Another useful feature of strict mode is that
it makes our code a bit future proof.
lets think about the reserve keywords in the language
we have things like let and const, these cant be used for variable names but 
there are someother things that are coming to javascript in the 
future which are not quite clear yet but
with the strict mode though we can reserve those identifiers making
sure that they are not gonna used in our programs

for example;
without strict mode 
const public = 'Rohit' 
will not generate any error since it is not a reserved identifer

---but with strict mode----
'use strict'
const public = "Rohit" //ReferenceError: public is a reserved identifers;

that means public is going to be used as reserved keyword  in the future so we can tweak it isPublic to avoid breaking in the furture

*/