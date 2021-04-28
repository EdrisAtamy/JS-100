let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
let lastName = rlSync.question('Whats your last name?\n');
console.log(`Good Morning, ${name} ${lastName}!`);