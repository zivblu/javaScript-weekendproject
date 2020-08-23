function dupCount(text) {
  let result = 0;
  soltingObject = {};
  text.toLowerCase().split('').map(str => {
      if (!soltingObject.hasOwnProperty(str)) {
          soltingObject[str] = 0;
      } else {
          if (soltingObject[str] === 0) {
              result += 1;
          }
          soltingObject[str] = soltingObject[str] + 1;
      }
  });
  return result;
}

console.log(dupCount('abcde'));   //no characters repeats more than once
console.log(dupCount('aabBcde'));   //'a' occurs twice and ‘b' twice ('b' and ‘B’)
console.log(dupCount('Indivisibilities'));  //'i' occurs seven times and ‘s' occurs twice