const tinderUser = new Object()  //this is singleton object

tinderUser.id = "abc123"
tinderUser.name = "lostdaffy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);




const regularUser = {
    email: "satyaasingh001@gmail.com",
    fullName: {
        userFullName: {
            firstName: "lost",
            lastName: "daffy"
        }
    }
}  // non singleton Object

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)   same line number 32
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);





// const user = [
//     {
//         id: 1,
//         email: "satyaasingh001@gmail.com"
//     },
//     {
//         id: 1,
//         email: "satyaasingh001@gmail.com"
//     },
//     {
//         id: 1,
//         email: "satyaasingh001@gmail.com"
//     },
//     {
//         id: 1,
//         email: "satyaasingh001@gmail.com"
//     },
// ]

// console.log(user[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName: "js with lostdaffy",
    price: "999",
    courseInstructor: "lostdaffy"
}

// first method
console.log(course.courseName);

// second method
const { courseName } = course
console.log(courseName);
const { courseName: Name } = course
console.log(Name);