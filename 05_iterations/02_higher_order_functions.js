const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let values = myNums.filter((num) => num > 4);
console.log(values);

const books = [
  { title: "Book One", genre: "Fiction", publish: "1981" },
  { title: "Book Two", genre: "Non-Fiction", publish: "1992" },
  { title: "Book Three", genre: "History", publish: "1999" },
  { title: "Book Four", genre: "Non-Fictio", publish: "1989" },
  { title: "Book Five", genre: "Science", publish: "2009" },
  { title: "Book Six", genre: "Fiction", publish: "1987" },
  { title: "Book Seven", genre: "History", publish: "1986" },
  { title: "Book Eight", genre: "Science", publish: "2011" },
  { title: "Book Nine", genre: "Science", publish: "2011" },
  { title: "Book Ten", genre: "Non-Fiction", publish: "1981" },
];

const userBooks = books.filter((book) => book.genre === "History");

console.log(userBooks);

let result = myNums.map((num) => num + 10);
console.log(result);

const initialValue = 0;
const finalSum = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(`Final sum = ${finalSum}`);
