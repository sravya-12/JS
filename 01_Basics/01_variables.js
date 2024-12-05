const accountId = 144553 // cannot change 
let accountEmail = "sravya@google.com" 
var accountPassword = "12345"
accountCity = "DC" // not preferred
let accountState; // accountState value is undefined

// accountId = 2 not allowed
accountEmail = "abc@google.com"
accountPassword = "22222"
accountCity = "Texas"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/