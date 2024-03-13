var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

addOne(2);

function addOne(num) {
  console.log(num + 1);
}

// addTwo(3) not allowed * Hoisting

const addTwo = function (num) {
  console.log(num + 2);
};

addTwo(3);
