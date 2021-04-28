
function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0!`); 
  } else if (num > 0 && num <= 50) {
    console.log(`${num} is greater than 0 and less than or equal to 50!`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is greater than or equal to 51 and less than or equal to 100`); 
  } else if (num > 100) {
    console.log(`${num} is greater than 100`); 
  } else 
    console.log('ERROR: INPUT IS NOT A NUMBER...');
}

numberRange(-2);
numberRange(25);
numberRange(75);
numberRange(125);
numberRange('string');