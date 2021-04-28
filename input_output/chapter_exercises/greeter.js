let rlSync = require('readline-sync');
let name = rlSync.question('Enter your name: \n'); 
let lastName = rlSync.question('Enter your last name: \n');
console.log(`Hello, ${name} ${lastName}!`);