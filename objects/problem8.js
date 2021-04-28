let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let array = [1, 2, 3];

function newObj(object, array) {
  let copyObj = {};
  
  if (array) {
    array.forEach(key => copyObj[key] = object[key]);
    return copyObj;
  } else 
    return Object.assign(copyObj, object);
}

console.log(newObj(objToCopy, array));