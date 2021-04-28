
let stringList = [
  'Porsche',
  'Cat',
  'Sports',
  'Computer',
  'Pizza',
  ]

function findStr(list, regex) {
  let array = [];
  
  for (let i=0; i < list.length; i++) {
    if (list[i].match(regex)) {
      array.push(list[i]);
    } 
  }
  
  return array;
}

console.log(findStr(stringList, /P/));
console.log(findStr(stringList, /C/));