let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((accumulator, string) => {
    let long = string.length; 
    if (long % 2 !== 0) {
      accumulator.push(long);
    }
    return accumulator;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]