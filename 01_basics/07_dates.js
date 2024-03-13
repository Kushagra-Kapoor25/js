let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
