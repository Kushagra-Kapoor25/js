function sayMyName() {
  console.log("Hello everyone!");
}

sayMyName();

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);

console.log(result);

function loginUserMessage(username = "sam") {
  return `${username} just logged in`;
}

console.log(loginUserMessage("Kushagra"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 3000));
