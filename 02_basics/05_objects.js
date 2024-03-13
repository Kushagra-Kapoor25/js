// const tinderUser = new Object() -> Singleton Object
const tinderUser = {}; // Non-singleton Object

tinderUser.id = "1234";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstName: "Kushagra",
      lastName: "Kapoor",
    },
  },
};

console.log(regularUser.fullName.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 4: "a", 5: "b" };

// const obj3 = { obj1, obj2}

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 }; // preferred way
console.log(obj5);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "javascript",
  price: "999",
  courseInstructor: "Kushagra",
};

const { courseInstructor: instructor } = course;

console.log(instructor);

// {
//     "name": "kushagra",
//     "coursename": "js",
//     "price": "free"
// }
