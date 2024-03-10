const name = "kushagra"
const repoCount = 100

// console.log(name + repoCount + " Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("kushagra")

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    kushagra     "
console.log(newStringOne);
console.log(newStringOne.trim());
