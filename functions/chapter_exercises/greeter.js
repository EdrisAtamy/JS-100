function fullName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let first = fullName('Enter your first name: ');
let last = fullName('Enter your last name: ');
console.log(`Hello ${first} ${last}!`);