let readlineSync = require('readline-sync'); 
let age = Number(readlineSync.question('Enter your age: \n'));
console.log(`You are ${age} years old.`); 
console.log(`In 10 years, you will be ${age + 10}`);
console.log(`In 20 years, you will be ${age + 20}`);
console.log(`In 30 years, you will be ${age + 30}`);
console.log(`In 40 years, you will be ${age + 40}`);