// Immediately Invoked Function Expressions (IIFE)
// global scope ke polutation se kai baar problem hoti hai 
// to jo global scope ke varibale or koi bhi declaration ke polution ko hatane ke liye iffe ka use karte hai 
// ()()

(function chai(){ // this function is named iife kyuki is function ka name hai
    console.log(`DB CONNECTED`);
})();

(function chaiTwo(){
    console.log(`DB CONNECTED 2`);
})();

(() => { //simple iife kyuki is function ka koi name nhi hai
    console.log(`DB CONNECTED 3`);
})();

((name) => { // papameter passing in iife
    console.log(`DB CONNECTED ${name}`);
})('lostdaffy'); // argument passing