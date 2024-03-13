const user = {
  username: "kushagra",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();

console.log(this); // works different in browser as it prints window object

// const chai = function() {
//     console.log("Chai");
// }

const chai = () => {
  console.log("Chai");
  console.log(this);
};

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(2, 4));

const objReturn = (name, age) => ({ name: name, age: age });

console.log(objReturn("kush", 23));
