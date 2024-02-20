// console.log("l");
// console.log("o");
// console.log("s");
// console.log("t");
// console.log("d");
// console.log("a");
// console.log("f");
// console.log("f");
// console.log("y");

function sayMyName() {
    console.log("l");
    console.log("o");
    console.log("s");
    console.log("t");
    console.log("d");
    console.log("a");
    console.log("f");
    console.log("f");
    console.log("y");
}

// sayMyName //referance
// sayMyName() //execution

// function sumTwoNumber(num1, num2){   //num1 and num2 is parameter
//     console.log(num1 + num2);
// }

// sumTwoNumber() return NaN(Not a Number) 
// sumTwoNumber(10, 50) //10 & 50 is arguments
// sumTwoNumber(10, "50")
// sumTwoNumber(10, "a")
// sumTwoNumber(10, null)


// function sumTwoNumber(num1, num2){   //num1 and num2 is parameter
//     let sum = num1 + num2
//     console.log(sum);
// }

// // sumTwoNumber(3, 5)
// const result = sumTwoNumber(3, 5)
// console.log("result", result);


// function sumTwoNumber(num1, num2) {   //num1 and num2 is parameter
//     return num1 + num2
// }

// const result = sumTwoNumber(3, 5)
// console.log("result", result);



// function loginUserMessage(userName) {
//     if (userName === undefined) {
//         console.log("Please Enter User Name");
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("lostdaffy"));
// console.log(loginUserMessage());

// function loginUserMessage(userName) {
//     if (userName === undefined) {
//         console.log("Please Enter User Name");
//         return
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("lostdaffy"));
// console.log(loginUserMessage());


// function loginUserMessage(userName) {
//     if (!userName) {
//         console.log("Please Enter User Name");
//         return
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("lostdaffy"));
// console.log(loginUserMessage());



// function loginUserMessage(userName = "lost") {
//     if (!userName) {
//         console.log("Please Enter User Name");
//         return
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("lostdaffy"));
// console.log(loginUserMessage());

// function loginUserMessage(userName = "lost") {
//     if (!userName) {
//         console.log("Please Enter User Name");
//         return
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("lostdaffy"));
// console.log(loginUserMessage("lostdaffy"));



// function calculateCartPrice(...num){
// return num
// }
// 
// console.log(calculateCartPrice(200, 300, 500, 800, 1000));


// function calculateCartPrice(val1, val2, ...num){
//     return num
// }

// console.log(calculateCartPrice(200, 300, 500, 800, 1000));


// const user = {
//     userName: "lostdaffy",
//     price: 199
// }

// function handleObject(anyObject){
//     console.log(`User Name is ${anyObject.userName} and Price is ${anyObject.price}`);
// }

// handleObject(user)


// const user = {
//     userName: "lostdaffy",
//     prices: 199
// }

// function handleObject(anyObject){
//     console.log(`User Name is ${anyObject.userName} and Price is ${anyObject.price}`);
// }

// handleObject(user)



// function handleObject(anyObject) {
//     console.log(`User Name is ${anyObject.userName} and Price is ${anyObject.price}`);
// }

// // object passing in function calling
// handleObject({
//     userName: "Satya",
//     price: 1899
// })


// const myNewArray = [100, 200, "Hello"]

// function handleArray(anyArray) { // anyArray ki jagh hum kuch bhi name de sakte hai
//     return anyArray[2]
// }

// // array passing in function calling
// console.log(handleArray(myNewArray));



function handleArray(anyArray) { // anyArray ki jagh hum kuch bhi name de sakte hai
    return anyArray[2]
}

// array passing in function calling
console.log(handleArray([100, 200, "Hello"]));


