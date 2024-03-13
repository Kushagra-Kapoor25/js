// singleton
// Object.create

// object literals

const jsUser = {
  name: "Kushagra",
  "full name": "Kushagra Kapoor",
  age: 23,
  location: "Shillong",
  email: "kushagra@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.email);
console.log(jsUser["full name"]);
jsUser.greeting = function () {
  console.log("Hello User");
};

jsUser.email = "kush@chat.com";
Object.freeze(jsUser);
console.log(jsUser);

jsUser.greeting();
