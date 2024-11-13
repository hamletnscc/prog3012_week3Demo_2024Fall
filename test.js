/*
Name: Hamlet Lin
Date: 11/12/2024
Description: Node + readline sync module demo
*/
const rs = require("readline-sync");
let name = rs.question("What is your name? ");
console.log(`Hello ${name}`);
let age = rs.question("Do you mind telling me how old you are? ");
console.log(`So, you were born on ${2024 - age}`);