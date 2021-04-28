
function times(num1, num2) {
  return num1 * num2;
}

function getNums(num){
  let getnum = require('readline-sync');
  return Number(getnum.question(num));
}

let firstnum = getNums('Enter the first number: ');
let secondnum = getNums('Enter the second number: '); 
console.log(`${firstnum} multiplied by ${secondnum} = ${times(firstnum, secondnum)} !`);