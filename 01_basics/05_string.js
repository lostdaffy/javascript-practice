const name = "lostdaffy"
const repoCount = 50

// console.log(name + repoCount + " Value"); // this is bad syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     // Good syntax


// New way String define


const gameName = new String('Clash of Clans');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// how to access all function or prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-5, 4);
// console.log(anotherString);

const newStringOne = "      lostdaffy      "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://lostdaffy.com/code%3by%3lostdaffy"
// console.log(url.replace('%3', '_'));
// console.log(url.replaceAll('%3', '_'));
// console.log(url.includes('satya'));
// console.log(url.includes('lostdaffy'));
// console.log(gameName.split(' '));