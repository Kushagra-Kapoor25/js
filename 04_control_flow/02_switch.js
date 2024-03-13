const month = 12;

switch (month) {
  case 1:
    console.log("Jan");
    break;

  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("Mar");
    break;

  case 4:
    console.log("Apr");
    break;

  case 5:
    console.log("May");
    break;

  case 6:
    console.log("Jun");
    break;

  case 7:
    console.log("Jul");
    break;

  case 8:
    console.log("Aug");
    break;

  case 9:
    console.log("Sep");
    break;

  case 10:
    console.log("Oct");
    break;

  case 11:
    console.log("Nov");
    break;

  case 12:
    console.log("Dec");
    break;

  default:
    console.log("WTF!");
}

// falsy values -> false, 0, -0, "", null, undefined, NaN
// truthy values -> "0", "false", " ", [], {}, function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Empty Object");
}

// Nullish Colaescing Operator -> works for null and undefined
let val1;
val1 = null ?? 10;

console.log(val1);

// Ternary Operator

const iceTeaPrice = 120;
iceTeaPrice > 80 ? console.log("More than 80") : console.log("Less than 80");
