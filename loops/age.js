let readlineSync = require('readline-sync'); 
let age = Number(readlineSync.question('Enter your age: \n'));

console.log(`You are ${age} years old.`); 

for (let i=10; i < 50; i+=10) {
  age += 10; 
  console.log(`In ${i} years, you will be ${age} years old.`);
}