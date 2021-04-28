let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj);

let endArray = array.map(key => key.toUpperCase());

console.log(endArray);
console.log(obj);