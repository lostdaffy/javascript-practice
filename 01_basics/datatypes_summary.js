/* What is Javascript language type? */




/********************************** Primitive Datatypes *******************************************/

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.33

const isLoggedIn = false
const outsideTemp = null

let userEmail; //undefined
let usersEmail = undefined; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

const bigNumber = 3645615679864565555n



/*************************** Non-primitive datatypes or reference datatypes ************************/

// Array, Objects, Functions

// array
const heros = ["Shaktiman", "naagraj", "doga"]


// object

let myObj = {
    name: "lostdaffy",
    age: 23
}


// function

const myFunction = function () {
    console.log("Hi lostdaffy");
}


// Types of all variables

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof usersEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);