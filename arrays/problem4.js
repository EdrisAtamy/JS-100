let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map( (element) => { 
  if (element % 2 === 0) {
    return 'Even';
  } else { 
    return 'Odd'; 
  }
}); 

/* let newArray = [];

for(let i=0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    newArray.push('Even'); 
  } else {
    newArray.push('Odd');
  }
} */ 

console.log(newArray); 