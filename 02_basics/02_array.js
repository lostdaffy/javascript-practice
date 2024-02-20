const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros);
console.log("A", allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log("B", allNewHeros);

const another_array = [5, 4, 6, 4, [6, 3, 15, 6], [8, 4, [6, 5, 1]]]
const all_another = another_array.flat(Infinity)
console.log(all_another);

console.log(Array.isArray("lostdaffy"));
console.log(Array.from("lostdaffy"));
console.log(Array.from({ name: "lostdaffy" }));  //interesting for interview


let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3));