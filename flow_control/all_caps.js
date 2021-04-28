
function allCaps(words) {
  if (words.length > 10) {
    return words.toUpperCase(); 
  } else 
    return words; 
}

console.log(allCaps('The sky is gray and cloudy'));
console.log(allCaps('hello'));