const user = {
    username: "lostdaffy",
    price: 1999,

    welcomeMessage: function () {
        // console.log(`${user.username}, welcome to website`); // ganda tarika 
        console.log(`${this.username}, welcome to website`); // accha tarika ye hai ('this' current contax ko refer karta hai)
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "satya"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "satya"
//     console.log(this.username);
// }

// chai()



// const chai = function(){
//     let username = "lostaddy"
//     console.log(this.username);
// }

// chai()



// const chai = () =>{
//     let username = "lostaddy"
//     console.log(this.username);
// }

// chai()




// explicite Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// Implicite return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));



// object return
// const addTwo = () => ({ username: "lostdaffy" })
// console.log(addTwo());


