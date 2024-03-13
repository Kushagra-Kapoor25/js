const marvel = ["ironman", "spiderman", "hulk"];
const dc = ["batman", "superman"];

const heroes = marvel.concat(dc);
console.log(heroes);

const allHeroes = [...marvel, ...dc]; // Preferred Way
console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Kushagra"));
console.log(Array.from("Kushagra"));

console.log(Array.from({ name: "kushagra" })); //important

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
