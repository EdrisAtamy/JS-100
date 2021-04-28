
let num = 5; 
let string = 'Stringy';

function isNotANumber(int) {
  if (int / 1 === int) {
    //console.log('This is a number!');
    return true;
  } else 
    //console.log('This is not a number!');
    return false;
}

console.log(isNotANumber(num));
console.log(isNotANumber(string));