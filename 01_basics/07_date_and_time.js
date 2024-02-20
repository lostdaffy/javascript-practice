// Dates


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0, 22)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate);


// let myCreatedDate = new Date(2023, 0, 22, 5, 3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("01-10-2024")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myTimeStamp / 1000);
// console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let dateFun = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(dateFun);