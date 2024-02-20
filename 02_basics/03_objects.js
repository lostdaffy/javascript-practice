// singleton



// object literals

const symb = Symbol("Key1")


const jsUser = {
    name: "lostdaffy",
    "Full Name": "lostdaffy lostdaffy",
    [symb]: "myKey1",
    age: 18,
    location: "Saharanpur",
    email: "satyaasingh001@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(jsUser);
console.log(jsUser.name); //first way to access object data
console.log(jsUser["name"]); //second way to access data
console.log(jsUser["Full Name"]);
console.log(jsUser.symb);
console.log(jsUser[symb]);


// change the value of variable
jsUser.email = "satyamworkoutvideos@gmail.com"
console.log(jsUser);

// Object.freeze(jsUser)

jsUser.email = "satyaasingh001@gmail.com"
console.log(jsUser);

jsUser.greeting = function () {
    console.log(`Hello lostdaffy`);
}

console.log(jsUser.greeting);  // this is give referance but function is not execute
console.log(jsUser.greeting());


jsUser.greetingTwo = function () {
    console.log(`Hello, ${this["Full Name"]}`);
}

console.log(jsUser.greetingTwo());