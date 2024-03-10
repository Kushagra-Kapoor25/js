// Log on console
console.log("Kushagra");

// let, const, var
const accountId = 144553 
let accountEmail = "kushagra@gmail.com"
var accountPassword = "password"
accountCity = "Shillong" // not recommended
let accountState

//accountId = 2 // Not allowed
accountEmail = "k@gmail.com"
accountPassword = "12345"
accountCity = "Delhi" 


console.log(accountId);

/*
    Prefer not to use var
    because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])