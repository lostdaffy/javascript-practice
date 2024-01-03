/**************************** Heap & Stack ************************************/

//     Stack(Primitive)
let myYoutubeName = "AI Docent"
let anotherName = myYoutubeName

anotherName = "code by lostdaffy"

console.log(myYoutubeName);
console.log(anotherName);

// Heap(Non-Primitive or Reference)
let userOne = {
    email: "satyamworkoutvideos@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "satyaasingh001@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);