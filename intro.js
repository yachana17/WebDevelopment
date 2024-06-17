//intro.js

// Js is the lang of web 
// FE ---> JS 

// browser ---> 
// server ---> env node js ---> to run js outside browser 

//1 varibles in js 
//console.log(1);
// let ---> block scope {    }
let x = 1;
let msg = "Hello";
console.log(msg);
if (x==1) {
    let age = 24;
    console.log(age);
}
console.log(msg);
//console.log(age); // reference error --->

function eg() {
    let x = 10;

    if (x==10){
        let y=5;
        console.log(x + y);
    }
    console.log(y);

}
eg();
// cannot be redeclared 
let z=1;