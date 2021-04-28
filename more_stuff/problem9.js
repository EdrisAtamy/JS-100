
let num = 0; 
let nonZero = -0;

function isNegZero(int) {
  if (int / 0 === Infinity) {
    console.log('This is an integer!'); 
  } 
  else if (int / 5 === 0) {
    console.log('This is a Zero!'); 
  }
  else 
    console.log('This is a -0, since it doesnt return Infinity or a Zero when divided!');
}

isNegZero(num);
isNegZero(nonZero);