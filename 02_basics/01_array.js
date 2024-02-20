const myArr = [21, 23, 56, 90, 43] //Array indexing always start from 0 
console.log(myArr);
console.log(myArr[2]);

const myHeroes = ["saktiman", "lostdaffy"]
console.log(myHeroes[1]);

// new way
const myArr2 = new Array(1, 2, 1, 2, 5)
console.log(myArr2);
console.log(myArr2[1]);

myArr.push(7, 8, 9)
console.log(myArr);

myArr.pop() //this is remove last value from array
console.log(myArr);

myArr.unshift(7, 9) //this is store the value in starting 
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(19));


const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);



// slice
console.log("A", myArr);

const myn1 = myArr.slice(0, 3)
console.log(myn1);
console.log("B", myArr);

// splice

const myn2 = myArr.splice(0, 3)
console.log(myn2);
console.log(myArr);
