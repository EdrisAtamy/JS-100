/*let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let newArray = arr.map(function(element) {
  return arr.filter(element => {
    if (element.length % 2 !== 0) {
      return element 
    }
  })
}) 

console.log(newArray); */ 

function oddLengths(strings) {
  let lengths = arr.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));