
function evenOrOdd(num) {
  
  let obj = require('readline-sync');
  let number = Number(obj.question(num));
  
  if (number % 2 === 0) {
    console.log('The number entered is Even!');
  } else if (Number.isInteger(number) === false) {
    console.log('ERROR: THIS IS NOT A NUMBER...');
    return;
  } else 
    console.log('The number entered is Odd!'); 
}

let number = evenOrOdd('Enter a number to be evaluated to Even or Odd: '); 