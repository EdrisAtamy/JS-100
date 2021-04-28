
//let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


/*myArray.forEach( () => {
  for(let i=0; i < myArray.length; i++){
    for(let j=0; j < myArray[i].length; j++){
      let num = myArray[i][j];
      if (num % 2 === 0) 
        console.log(myArray[i][j]);
    }
  }
}); */ 

myArray.forEach(function(nestArray) {
  nestArray.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});