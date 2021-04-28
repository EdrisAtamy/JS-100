let array = [3, 5, 7];

function sumOfSqaures(theArray) {
  return theArray.reduce((accumulator, element) => element * element + accumulator, );
}

console.log(sumOfSqaures(array));