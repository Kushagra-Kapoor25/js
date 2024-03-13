for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop iteration: ${i}`);
  for (let j = 1; j <= i; j++) {
    console.log(`Inner loop iteration: ${j}`);
  }
}

let i = 1;
while (i < 10) {
  console.log(`Value of i: ${i}`);
  i++;
}
console.log(i);

let j = 1;
do {
  console.log(`Value of j: ${j}`);
  j++;
} while (j < 10);
console.log(j);

// for of

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const val of arr) {
  console.log(val);
}

let name = "Kushagra";

for (const char of name) {
  console.log(`Each char is ${char}.`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for in

const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

for (const key in myObject) {
  console.log(`${key} is shortcut for ${myObject[key]}`);
}

const coding = ["js", "ruby", "java", "cpp", "python"];

coding.forEach(function (item) {
  console.log(item);
});

coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.languageName} extension is ${item.languageFileName}`);
});
